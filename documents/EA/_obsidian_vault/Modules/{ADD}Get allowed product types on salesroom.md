---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1564986
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get allowed product types on salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

{ADD PCG-2566/}
Input:
- Salesroom - code of salesroom
- SalesroomProducts (optional) - set of products currently assigned to the Salesroom

Algorithm:
If SalesroomProducts are defined on input then SAL_Product = SalesroomProducts. 
Else get SAL_Product by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = PRODUCT
Let SAL_ProductType_PROD (product type, initial transaction type) is a unique set of all product types of all products in SAL_Product

System gets all disbursement channels defined for salesroom by calling HSIS (GET salesrooms) with parameters
- code = Salesroom
If at least one disbursement channel is returned for salesroom, then
-- SAL_ProductType_DISB (product type, initial transaction type) is a unique set of product types for which a disbursement channel is defined for Salesroom
-- and partnerCode = partnerCode 
otherwise
System gets all disbursement channels defined for partner by calling HSIS (GET partners) with parameters
- code = partnerCode 
-- SAL_ProductType_DISB (product type, initial transaction type) is a unique set of product types for which a disbursement channel is defined for Partner

Allowed product types for Salesroom are defined as intersection of SAL_ProductType_PROD and SAL_ProductType_DISB.
If SAL_ProductType_PROD contains (product type = REL, initial transaction type = NDF) or (product type = SAI), it is always added to set of Allowed product types.

Output:
List of allowed Product types

## 🔗 Connections (3)

- → Dependency: [[Get Salesroom Sales Items]]
- ← Dependency: [[{ADD}Marketing offer availability]]
- ← Dependency: [[GET data for product calculator]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
