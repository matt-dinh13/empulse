---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1627483
diagrams: 8
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Get allowed Product Types on POS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

Input:
- Salesroom
- SalesroomProducts (optional) - set of products currently assigned to the Salesroom

Algorithm:
If SalesroomProducts are defined on input then SAL_Product = SalesroomProducts. 
Else get SAL_Product by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = PRODUCT
Let SAL_ProductType_PROD (product type, initial transaction type) is a unique set of all product types of all products in SAL_Product
//TBD - Check Product/Salesroom Sales Area compatibility
If at least one disbursement channel is defined for Salesroom, then 
-- SAL_ProductType_DISB (product type, initial transaction type) is a unique set of product types for which a disbursement channel is defined for Salesroom (SALESROOM_DISBURSEMENT_CHANNEL)
otherwise
-- SAL_ProductType_DISB (product type, initial transaction type) is a unique set of product types for which a disbursement channel is defined for Salesroom.Partner (PARNER_DISBURSEMENT_CHANNEL).

Allowed product types for Salesroom are defined as intersection of SAL_ProductType_PROD and SAL_ProductType_DISB.
If SAL_ProductType_PROD contains (product type = REL, initial transaction type = NDF) {ADD PCG-1208_1}or (product type = SAI){/ADD}, it is always added to set of Allowed product types.

Output:
List of allowed Product types

## 🔗 Connections (5)

- ← Dependency: [[{ADD}09.502 Get Data For Product Calculator]]
- ← Dependency: [[Check if Marketing Offer is available for Salesroom]]
- → Dependency: [[Get Salesroom Sales Items]]
- ← Dependency: [[Selection of Product Type for product calculation]]
- ← Dependency: [[{MOD}Product selection]]

## 📊 Appears In (8 diagrams)

- Custom: Business Rules
- Custom: Business Rules - Provide Product Offer Limits
- Custom: Calculate product offer
- Custom: Get Salesroom Properties - business rules
- Custom: Product and Service selection
- Use Case: Choose product offer
- Use Case: Customer Marketing Offers
- Use Case: Sales Features
