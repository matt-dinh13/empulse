---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules"
domain: "Modules"
element_id: 1627478
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Available commodity types for salesroom

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules

## 📝 Notes

This rule returns values as intersection of:

	
- commodity types related to actual salesroom (see Salesroom Commodity Type in LDM)


	
- commodity types related to active products related to the actual salesroom (see Product To Commodity Type in LDM)

Where

	
- Commodity types for actual salesroom are defined as:
- particular commodity types assigned to the salesroom at the given time
- or,  when the salesroom has no commodity types assigned, all commodity types
	
- Commodity types for product are defined as:
For products where UseFinancingScheme = False
- particular commodity types assigned to the product
- or,  when the product has no commodity types assigned, all commodity types
For products where UseFinancingScheme = True
- particular commodity types used as criterion for any of Financing Package assigned to the product
- or,  when no commodity type is criterion of any of Financing Package assigned to the product, all commodity types

## 🔗 Connections (3)

- ← Dependency: [[{ADD}09.502 Get Data For Product Calculator]]
- ← Dependency: [[Check if Marketing Offer is available for Salesroom]]
- ← Dependency: [[Reset of Product preferences according to selected Calculation method]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: Business Rules - Provide Product Offer Limits
- Use Case: Choose product offer
- Use Case: Customer Marketing Offers
- Use Case: Sales Features
