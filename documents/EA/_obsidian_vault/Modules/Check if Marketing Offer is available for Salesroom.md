---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1495735
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Check if Marketing Offer is available for Salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

Input:
- Salesroom
- record in responseMO (see GetCustomerMarketingOfferResponse) (referenced as MO)

If all following checking are satisfied then return True otherwise return False.

// Check Product compatibility
Let CO_Product is a set of products defined by MO.CustomerMarketingOfferDataProduct.Product
If CO_Product is empty, this check is evaluated as met.
Else:
Get SAL_Product (set of Products assigned to the Salesroom on current date+time) by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = PRODUCT

(TBD - Check Product/Salesroom Sales Area compatibility).
Then, intersection of CO_Product and SAL_Product must be non-empty set.

// Check Product Type + Initial Transaction Type compatibility
If MO.CustomerMarketingOfferDataProduct.productType is empty, this check is evaluated as met.
Else:
Let CO_ProductType is a set of all combinations of (product types,initial transaction type) defined as follows:
If both MO.CustomerMarketingOfferDataProduct.(productType + initialTransactionType) are defined then: 
-- Let CO_ProductType = combination of MO.CustomerMarketingOfferDataProduct.(productType + initialTransactionType) 
-- Let SAL_ProductType is a set of all combinations of (product types,initial transaction type) of all products currently assigned to the Salesroom according to rule Get allowed Product Types on Salesroom with parameters
- Salesroom
- SalesroomProducts = SAL_Product
-- Then, intersection of CO_ProductType and SAL_ProductType must be non-empty set.

If MO.CustomerMarketingOfferDataProduct.initialTransactionType = POS or all products in CO_Product are defined with initialTransactionType = POS then:
// Check Commodity Type compatibility
If MO.CustomerMarketingOfferDataProduct.commodityType is defined then 
-- CO_CommodityType = MO.CustomerMarketingOfferDataProduct.commodityType 
else
-- CO_CommodityType = distinct set of MO.CustomerMarketingOfferDataProduct.product.Product.CommodityType  for all products
Let SAL_CommodityType is a set of all commodity types currently allowed for the Salesroom according to rule Available commodity types for salesroom.
Then, intersection of CO_CommodityType and SAL_CommodityType must be non-empty set.

// Check Credit Amount compatibility
If MO.CustomerMarketingOfferDataProduct.maximalCreditAmount is defined then system checks it against minimal credit amount, which is set on products currently assigned to the Salesroom. 
At least one Product must be found in SAL_Product where Product.ProductVariant.CreditAmountMin <= MO.CustomerMarketingOfferDataProduct.maximalCreditAmount.

## 🔗 Connections (4)

- → Dependency: [[Get Salesroom Sales Items]]
- → Dependency: [[Available commodity types for salesroom]]
- → Dependency: [[{MOD}Get allowed Product Types on POS]]
- ← Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Business Rules - Provide Product Offer Limits
- Use Case: Customer Marketing Offers
