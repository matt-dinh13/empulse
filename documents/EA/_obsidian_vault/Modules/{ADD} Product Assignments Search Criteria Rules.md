---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules"
domain: "Modules"
element_id: 1873731
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD} Product Assignments Search Criteria Rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules

## 📝 Notes

{ADD PCG-5594}
For country: PH

Validation rules - input Search parameters:

	
- salesroomCode: mandatory


	
- partnerCode: optional - Possible to input only one of partnerCode, partnerName (other filed is disabled)


	
- partnerName: optional - Possible to input only one of partnerCode, partnerName (other field is disabled)


Button "Search" stays inactive until input field "Product code" is not filled. 

Search Criteria
Product code - System finds all salesrooms with current (present) or future product assignment.
Partner data - Allows user to fill in either Partner code OR Partner name. When filling one of the fields, the other is inactive.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Show product assignments]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Products Assignment Governance
- Use Case: UI - Product Assignments Governance
