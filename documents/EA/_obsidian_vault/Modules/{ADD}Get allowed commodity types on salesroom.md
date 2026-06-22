---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1564985
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get allowed commodity types on salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

{ADD PCG-2566/}
This rule returns values as intersection of:

	
- commodity types related to actual salesroom
	
- commodity types related to active products related to actual salesroom


Input:
- Salesroom - code of salesroom

Commodity types on salesroom are defined as:
System gets all commodity types assigned on salesroom by calling HSIS (GET commodities) with parameters
- salesroomCode = Salesroom
If no commodity type is returned then all commodities are allowed.
Commodity types on product are defined as:
System gets products assigned on salesroom  by the rule Get Salesroom Sales Items with parameters
- Salesroom
- SalesItemType = PRODUCT
For each product returned then get commodity types assigned on product as:
If Product.UseFinancingScheme = False

	
- System gets all commodity types assigned on product from Product To Commodity Type. 
If no commodity type is assigned to product then all commodities are allowed.

If Product.UseFinancingScheme = True

	
- System gets all commodity types assigned on Financing Package Criterion where criterionType = COMMODITY_TYPE for financing package assigned on product Product To Financing Package
If no commodity type is assigned to financing package then all commodities are allowed

List of allowed commodity types is intersection of list of salesroom commodity types and product commodity types.

Output:
List of commodity types

## 🔗 Connections (3)

- → Dependency: [[Get Salesroom Sales Items]]
- ← Dependency: [[{ADD}Marketing offer availability]]
- ← Dependency: [[GET data for product calculator]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
