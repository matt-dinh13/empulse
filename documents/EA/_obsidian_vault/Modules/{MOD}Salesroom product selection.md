---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Business Rules"
domain: "Modules"
element_id: 1873192
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Salesroom product selection

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Business Rules

## 📝 Notes

Description:
This algorithm select products that are assigned to salesroom and match the input filter parameters.

Note: returned products should be used as a input of product calculator and should replace Product selection 

Inputs:

	
- salesroomCode
	
- productCodes (optional)
	
- initialTransaction types (optional)
	
- productTypes (optional)
	
- productSets (optional)
	
- productSelection type (optional)
	
- serviceTypePreferences (optional)
	
- commodities (optional)
	
- allowAlternative (optional)
	
- debit (optional)
	
- debitCardType (optional)
	
- forRefinancing (optional)


Outputs:

	
- list of suitable product codes
	
- list of unsuitable product codes


Steps:
Product needs to match all following restriction to be allowed.

Product on salesroom
Get SAL_Product (set of Products assigned to the Salesroom on current date+time) by the rule Get Salesroom Sales Items with parameters
- salesroomCode
- SalesItemType = PRODUCT

	
- Product is available for Salesroom, i.e. Product.Code is in SAL_Product.


	
- If GlobalParameter.UseSalesArea = 'TRUE':
- if Salesroom.SalesArea <> 'NULL' then Salesroom.SalesArea must be one of the sales areas assigned to the product.
- if Salesroom.SalesArea = 'NULL', no product is offered
	
- If allow alternative = true the Product with ONLINE flag are available only if Salesroom.OnlineConnection = true.


Product type

	
- Product.ProductProfile.(ProductType and Initial Transaction Type) must be allowed for salesroom according to the rule Get allowed Product Types on Salesroom with parameters
- salesroomCode
- SalesroomProducts = SAL_Product


	
- If initialTransactionTypes are defined on input then Product.Product.Profile.InitialTransactionType must match one from the input.
	
- If productTypes are define on input then Product.ProductProfile.ProductType must match one from the input.
	
- If debit = true then Product.ProductProfile.IsDebit must be true.


Product 

	
- Product.ValidFrom <= 'current date' <= Product.ValidTo
	
- Product.VersionStatus = 'active'

If productCodes are defined on input then Product.ProductCode must match one from input.

Products intended for alternative offers 
If allowAlternatives = false then Product.Alternative must be false.

Products intended for refinancing 
If forRefinancing = true then only products having Product.ProductFlag.ProductFlagType.Code = REFINANCE are taken into account.

Commodities

	
- Number of commodities on input must be lower or equal to Product.MaxGoodsQuantity


Commodities, Manufacturers, Models and Commodities price
Commodities

	
- Commodity type - restrictions for the most expensive commodity type of chosen commodities (prices of goods of the same commodity types are summarized).  
Only such products are taken into account
- if commodities.CommodityTypeCode is commodity type assigned to product  
OR
- if no commodity is assigned to product.

Manufacturers

	
- When commodity.manufacturer is not selected at all chosen commodities, only products are taken into account that are defined without manufacturers.
	
- When at least one manufacturer is selected at any chosen commodity, only such products are taken into account 
a) if all of the selected manufactures are assigned to product (Product.Manufacturer)
OR
b) if no manufacturer is assigned to product.

Models {ADD PCG-3473}(freetext){/ADD}

	
- All products are taken into account that are defined with no model defined for the given couples [commodityX, product] where commodityX is each commodities.commodityTypeCode commodity.
	
- When a model is chosen (at least at one chosen commodity), also products are taken into account where chosen model is defined for chosen commodity assigned to the product (Product->ProductToCommodityType(.Model)->CommodityType).
If there are more commodities with model selected (also same commodity more times with different model), all corresponding commodities must be assigned to the product with defined chosen model.Model check is case insensitive.
	
- When a model is chosen for any commodity and no commodity type is assigned to a product, the product is ignored.

{ADD PCG-3473}Model codes

	
- All products are taken into account that are defined with no model code defined for the given couples [commodityX, product] where commodityX is each commodities.commodityTypeCode commodity.
	
- When a model code is chosen (at least at one chosen commodity), also products are taken into account where chosen model code is defined for chosen commodity assigned to the product (Product->ProductToCommodityType(.ModelCode)->CommodityType).
If there are more commodities with model code selected (also same commodity more times with different model code), all corresponding commodities must be assigned to the product with defined chosen model.

When a model code is chosen for any commodity and no commodity type is assigned to a product, the product is ignored.{/ADD}
Commodities price

	
- Check only when GlobalParameter.CommodityPriceLimit (PCG_COMMODITY_PRICE_LIMIT) is TRUE


	
- If Model {ADD PCG-3473}or ModelCode{/ADD}from input is chosen and [commodity, model {ADD PCG-3473}or model code{/ADD}, price range] combination is defined on product (product.productToCommodityType) then check corresponding commodity price limit [commodity, model {ADD PCG-3421}or model code{/ADD}, price range],
Else check corresponding commodity price limit [commodity, price range].
	
- Select products where Goods price is in Commodity price limit (product.productToCommodityType.priceFrom <= commodity.price <= product.productToCommodityType.priceTo) 
or where commodity price limit is not defined.


Card type (for selected option debit card only)

	
- If cardType is defined then all products are taken into account where 
- service of type CRDPST is assigned (cardService)
and
- CardType = cardType where
   --- CardType = cardService.PersonalizedCardType (if cardService.PersonalizedCardAllowed = TRUE)
   --- CardType = cardService.InstantCardType (otherwise).


Product Sets (for other options then debit card only)

	
- If any productSet is defined on input then only Products where corresponding Product Set is assigned, are taken into account. If more productSets are defined on input then all of them must satisfy this condition.


Required Service Types (for other options then debit card only)

	
- If any service type is defined on input with preference = 'REQUIRED' there must be service with corresponding type assigned to the Product where current date is in interval (Service.ValidFrom, Service.ValidTo).


Refused Services Types (for other options then debit card only)

	
- If any service type is defined on input with preference = 'REFUSED' and corresponding service type is assigned to the Product with AdjustmentRule = 'Mandatory' the product is not taken into account.

## 🔗 Connections (1)

- ← Dependency: [[POST salesroom-products]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
