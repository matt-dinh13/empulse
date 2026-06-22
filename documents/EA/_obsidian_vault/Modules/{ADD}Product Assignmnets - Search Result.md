---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules"
domain: "Modules"
element_id: 1873732
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Product Assignmnets - Search Result

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Business Rules

## 📝 Notes

Search Result
Filter data based on Valid from and Valid to - display only assignments in present and future i.e.:

	
- Valid From =< Current Date =< Valid To
	
- OR Valid From => Current Date =< Valid To

NOTE: Don't display "outdated" assignments, where both: valid from and valid to dates are in past.

Multiple Search Criteria
Filter Data which meets all the input Search Criteria, i.e.: 

	
- IF user enters multiple products and multiple partners at the same time, system must return only those salesrooms that satisfy both conditions: salesrooms where the product is assigned + assignments periods, and salesrooms associated with the selected partner(s). In other words, the returned data must meet all selected criteria simultaneously.


Ordering and Paging
Search results: columns on UI must appear in following order:
Salesroom code, Salesroom name, Product code, Product name, Partner code, Partner name, Valid from, Valid to

Default order: Order by Product Code
Rows appear in the same order as shown in UI search results (respecting sorting and filters applied by user).
Paging: Yes (number of rows is defined by system parameter)

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Show product assignments]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Products Assignment Governance
- Use Case: UI - Product Assignments Governance
