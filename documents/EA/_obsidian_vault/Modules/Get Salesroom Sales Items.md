---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1627476
diagrams: 7
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Get Salesroom Sales Items

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

// Returns set of Products or Services assigned currently on Salesroom
Input:
- SalesroomCode
- SalesItemType (PRODUCT or SALESROOM)

Output:
- List of codes of assigned Products/Services

Create request (GetSalesroomSalesItemRequest) with parameters (set of search criterions):
- request.GetSalesroomSalesItemCriterion[1].(type, value) = (SALESROOM, SalesroomCode)
- request.GetSalesroomSalesItemCriterion[2].(type, value) = (ITEMTYPE, SalesItemType)
- request.GetSalesroomSalesItemCriterion[3].(type, value) = (VALID_ON_DATE, current date + time)
and send the request via SalesPackageWS.GetSalesroomSalesItem (UC 09.308 Get Salesroom Sales Item).

Receive response (GetSalesroomSalesItemResponse).

For each SalesroomSalesItem from response.ResultGetSalesroomSalesItem.SalesroomSalesItemValues 
return SalesroomSalesItem.itemCode.

## 🔗 Connections (7)

- ← Dependency: [[Check if Marketing Offer is available for Salesroom]]
- ← Dependency: [[{ADD}Marketing offer availability]]
- ← Dependency: [[{ADD}Get allowed product types on salesroom]]
- ← Dependency: [[{ADD}Get allowed commodity types on salesroom]]
- ← Dependency: [[{MOD}Get allowed Product Types on POS]]
- ← Dependency: [[Check Service Availability on Salesroom]]
- ← Dependency: [[{MOD}Product selection]]

## 📊 Appears In (7 diagrams)

- Custom: Business Rules
- Custom: Business Rules - Provide Product Offer Limits
- Custom: Calculate product offer
- Custom: Get Salesroom Properties - business rules
- Custom: Product and Service selection
- Use Case: Use Case
- Use Case: Use Case
