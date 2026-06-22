---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules"
domain: "Modules"
element_id: 1873733
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Product Assignments - Filter parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules

## 📝 Notes

Filter Parameters

	
- Salesroom - Drop-down menu
When a salesroom is chosen, UI displays in Search result only product assignments related to the salesroom.
	
- Commodity type - Drop-down menu
List of Commodity Types, sorted by Commodity Category. UI displays in Search result list of salesrooms where chosen commodity is present.


Filtering rules for final list in Dropdown menu:
- Filter only those commodities, which are linked to any salesrooms or product from  final Search Result by Type Code 
NOTE: use the same logic as for Drop-down Menu "Commodity Types" in PRC UI - Create Financing package screen

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Show product assignments]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Products Assignment Governance
- Use Case: UI - Product Assignments Governance
