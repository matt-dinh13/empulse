---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1835626
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Product selection

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Description:
This algorithm checks whether the product is available for product calculation according to specified preferences and limits.

Inputs:

	
- Set of Sales parameters
	
- Set of loan preferences
	
- Set of additional limits for optional offers
	
- Set of global parameters
	
- responseCMO(GetCustomerMarketingOfferResponse) (optional)

For details see parent rule Calculate product offer.

For Primary offer set Salesroom to the salesroom the user is currently logged on.
For Optional offer set Salesroom by the rule Get salesroom by operation(AF_SUBMITTED)

Steps:
Product has to meet all the following restrictions otherwise is ignored.

Salesroom vs. Product
Get SAL_Product (set of Products assigned to the Salesroom on current date+time) by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = PRODUCT

	
- Product is available for Salesroom, i.e. Product.Code is in SAL_Product.


	
- If GlobalParameter.UseSalesArea = 'TRUE':
- if Salesroom.SalesArea <> 'NULL' then Salesroom.SalesArea must be one of the sales areas assigned to the product.
- if Salesroom.SalesArea = 'NULL', no product is offered
	
- For Primary offer: Product with ONLINE flag is available only if Salesroom.OnlineConnection = true.


Product type

	
- Product.ProductProfile.(ProductType and Initial Transaction Type) must be allowed for salesroom according to the rule Get allowed Product Types on Salesroom with parameters
- Salesroom
- SalesroomProducts = SAL_Product


	
- For Primary offer: 
- If selected option is Consumer loan then Product.ProductProfile.InitialTransactionType must be POS and Product.ProductProfile.ProductType must be CEL or REL.
- If selected option is Cash loan then Product.ProductProfile.InitialTransactionType must be CASH and Product.ProductProfile.ProductType must be CEL or REL.
- If selected option is Revolving loan without initial transaction then Product.ProductProfile.InitialTransactionType must be NDF and Product.ProductProfile.IsDebit = FALSE and Product.ProductProfile.ProductType must be REL.
- If selected option is Debit card  then Product.ProductProfile.InitialTransactionType must be NDF and Product.ProductProfile.IsDebit = TRUE and Product.ProductProfile.ProductType must be REL.
- If selection option is Standalone Insurance then  Product.ProductProfile.InitialTransactionType must be NDF and Product.ProductProfile.ProductType must be SAI.


	
- For Optional offer:
- Product.ProductProfile.ProductType =  required Product Type
- Product.ProductProfile.InitialTransactionType =  required Initial Transaction Type
- Product.ProductProfile.IsDebit = required IsDebit flag.


Product 

	
- Product.ValidFrom <= 'current date' <= Product.ValidTo
	
- Product.VersionStatus = 'active'

Following is checked only for optional offers generating:

	
- If it is required to use the same product as it is assigned to ChosenOffer (i.e. SameProduct = true), only this product is used.
	
- If set of particular allowed products is defined (LAP Offer vector.prodCode) then only such products are taken into account.
	
- If it is required to use same product and set of particular allowed products is defined and same product is not in the set of particular allowed products, the calculation is terminated.


Products intended for alternative offers (only for primary offers)
If Product.Alternative = True then product is ignored.

Products intended for refinancing (only for alternative offers)
If LAP Offer vector.isForRefinance = TRUE then only products having Product.ProductFlag.ProductFlagType.Code = REFINANCE are taken into account.


Service Type (only for option Standalone Insurance)

	
- If Service Type is defined on input then only Products where corresponding Service Type is assigned are taken into account.


Campaign and bound products 
Bound products are products where Product.ProductFlag.ProductFlagType.Code = BOUND; other products are non-bound.

Following is checked only for primary offers generating when a campaign is selected:

	
- If there are any products defined for the selected Campaign, only such products are taken into account.


	
- If no products are assigned to selected Campaign and global parameter UseOnlyBoundProductsForCampaign = true, only bound products are taken into account.


Following is checked only for alternative offers if set of particular allowed products (LAP Offer vector.prodCode) is NOT defined: 

	
- If ProductSelectionType (LAP Offer vector.prodSelectionType) is not defined the use ProductSelectionType = NONBOUND
	
- If ProductSelectionType = CAMPAIGN then take into account only particular products which are defined by their codes in one of current available client's X-sell campaigns (see Note for more info); if no products are defined in client’s campaigns then use ProductSelectionType = BOUND 
Note: Campaigns are union of
- Marketing Offers available on Salesroom (see responseCMO on input).
- Marketing Offer assigned to the currently chosen Primary offer (if any assigned).
	
- If ProductSelectionType = ALL then no restriction to bound/non-bound products is applied
	
- If ProductSelectionType = NONBOUND then only non-bound products are taken into account
	
- If ProductSelectionType = BOUND then only bound products are taken into account


Commodities (for selected option consumer loan only)

	
- Number of chosen commodities  must be lower or equal to Product.MaxGoodsQuantity


Commodities, Manufacturers, Models and Commodities price are checked only for selected options consumer loan or Standalone Insurance and only if Product.UseFinancingScheme = False.
Commodities

	
- Commodity type - restrictions for the most expensive commodity type (RequiredCommodityType) of chosen commodities (prices of goods of the same commodity types are summarized).  
Only such products are taken into account
- if RequiredCommodityType is commodity type assigned to product  
OR
- if no commodity is assigned to product.

Manufacturers

	
- When manufacturer is not selected at all chosen commodities, only products are taken into account that are defined without manufacturers.
	
- When at least one manufacturer is selected at any chosen commodity, only such products are taken into account 
a) if all of the selected manufactures are assigned to product (Product.Manufacturer)
OR
b) if no manufacturer is assigned to product.

Models {ADD PCG-3421}(freetext){/ADD}

	
- All products are taken into account that are defined with no model defined for the given couples [commodityX, product] where commodityX is each RequiredCommodityType commodity.
	
- When a model is chosen (at least at one chosen commodity), also products are taken into account where chosen model is defined for chosen commodity assigned to the product (Product->ProductToCommodityType(.Model)->CommodityType).
If there are more commodities with model selected (also same commodity more times with different model), all corresponding commodities must be assigned to the product with defined chosen model. Model check is case insensitive.
	
- When a model is chosen for any commodity and no commodity type is assigned to a product, the product is ignored.

{ADD PCG-3421}Model codes

	
- All products are taken into account that are defined with no model code defined for the given couples [commodityX, product] where commodityX is each RequiredCommodityType commodity.
	
- When a model code is chosen (at least at one chosen commodity), also products are taken into account where chosen model code is defined for chosen commodity assigned to the product (Product->ProductToCommodityType(.ModelCode)->CommodityType).
If there are more commodities with model code selected (also same commodity more times with different model code), all corresponding commodities must be assigned to the product with defined chosen model. 
	
- When a model code is chosen for any commodity and no commodity type is assigned to a product, the product is ignored.{/ADD}

Commodities price

	
- Check only when GlobalParameter.CommodityPriceLimit (PCG_COMMODITY_PRICE_LIMIT) is TRUE


	
- If Model {ADD PCG-3421}or ModelCode{/ADD} from loan preference is chosen and [commodity, model {ADD PCG-3421}or model code{/ADD}, price range] combination is defined on product (product.productToCommodityType) then check corresponding commodity price limit [commodity, model {ADD PCG-3421}or model code{/ADD}, price range],
Else check corresponding commodity price limit [commodity, price range].
	
- Select products where Goods price is in Commodity price limit (product.productToCommodityType.priceFrom <= Goods price from loan preference <= product.productToCommodityType.priceTo) 
or where commodity price limit is not defined.


Card type (for selected option debit card only)

	
- All products are taken into account where 
- service of type CRDPST is assigned (cardService)
and
- CardType = required Card type entered in Product preferences where
   --- CardType = cardService.PersonalizedCardType (if cardService.PersonalizedCardAllowed = TRUE)
   --- CardType = cardService.InstantCardType (otherwise).


Documents

	
- Documents delivered by the client have to fulfill conditions given by the applicable document containers - see Document container check


Web Camera

	
- If any document requires taking photo by web camera, salesroom must have web camera - see Web camera check


Currency

	
- Currency defined for product has to match the input currency


Product Sets (for other options then debit card only)

	
- If any Product Set is defined on input then only Products where corresponding Product Set is assigned, are taken into account. If more Product Sets is defined on input then all of them must satisfy this condition.


Required Service Types (for other options then debit card only)

	
- If any service type is defined on input with preference = 'REQUIRED' and no service of corresponding type is assigned to the Product where current date is in interval (Service.ValidFrom, Service.ValidTo) the calculation is terminated.


Refused Services Types (for other options then debit card only)

	
- If any service type is defined on input with preference = 'REFUSED' and corresponding service type is assigned to the Product with AdjustmentRule = 'Mandatory' the calculation is terminated.

## 🔗 Connections (5)

- → Dependency: [[Get Salesroom Sales Items]]
- → Dependency: [[{MOD}Get allowed Product Types on POS]]
- → Dependency: [[Web camera check]]
- → Dependency: [[{MOD}Document container check]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Product and Service selection
