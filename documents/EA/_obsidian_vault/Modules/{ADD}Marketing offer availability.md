---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1564987
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}Marketing offer availability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

{ADD PCG-2566/}
Input:
- Salesroom
- List of Products
- Product Type
- Commodity Type
- Initial Transaction Type
- Maximal Credit Amount

If all following checking are satisfied then return True otherwise return False.

// Check Product compatibility
If List of products is empty, this check is evaluated as met.
Else:
Get (set of Products assigned to the Salesroom on current date+time) by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = PRODUCT

// Check Product Type + Initial Transaction Type compatibility
If Product Type is empty, this check is evaluated as met.
Else:
Let CO_ProductType is a set of all combinations of (product types,initial transaction type) defined as follows:
If both Product Type and Initial Transaction Type are defined then: 
-- Let CO_ProductType = combination of Product Type + Initial Transaction Type 
-- Let SAL_ProductType is a set of all combinations of (product types,initial transaction type) of all products currently assigned to the Salesroom according to rule Get allowed product types on salesroom  with parameters
- Salesroom
- SalesroomProducts = SAL_Product
-- Then, intersection of CO_ProductType and SAL_ProductType must be non-empty set.

If Initial Transaction Type = POS or all products in CO_Product are defined with initialTransactionType = POS then:
// Check Commodity Type compatibility
If Commodity Type is defined then 
-- Commodity type from Product To Commodity Type  = Commodity Type 
else
Let CO_CommodityType from Product To Commodity Type = distinct set of Product To Commodity Type for all products
Let SAL_CommodityType is a set of all commodity types currently allowed for the Salesroom according to rule Get allowed commodity types on salesroom.
Then, intersection of CO_CommodityType and SAL_CommodityType must be non-empty set.

// Check Credit Amount compatibility
If Maximal Credit Amount is defined then system checks it against minimal credit amount, which is set on products currently assigned to the Salesroom. 
At least one Product must be found in SAL_Product where Product.ProductVariant.CreditAmountMin <= Maximal Credit Amount.

## 🔗 Connections (4)

- → Dependency: [[Get Salesroom Sales Items]]
- → Dependency: [[{ADD}Get allowed product types on salesroom]]
- → Dependency: [[{ADD}Get allowed commodity types on salesroom]]
- ← Dependency: [[POST marketing offer availability]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
