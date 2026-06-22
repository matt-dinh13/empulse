---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Financing Package Assignment/User Interface"
domain: "Modules"
element_id: 1382362
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Filter list of Financing Packages

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Financing Package Assignment/User Interface

## 📝 Notes

// Filtering of Financing Packages for assignment to Product
After user fills FilterByText and/or FilterBySelection and presses button Filter then the list of Financing Packages (FP) is filtered as follows (all conditions must be satisfied):

	
- If FilterByText is defined then system displays rows where UpperCase(FilterByText) is in UpperCase(FP.code or FP.name or FP.description).
	
- If FilterBySelection = ALL then status of Selection is not reflected in filtering.
	
- If FilterBySelection = SELECTED then only selected rows are displayed.
	
- If FilterBySelection = NON_SELECTED then only non-selected rows are displayed.

Initial setting:
- FilterByText is empty
- FilterBySelection = ALL

Filtering of the rows has no effect on Selection.
 
After user presses button Clear Filter then fields FilterByText and/or FilterBySelection are filled by initial setting and list of Financing Packages is refreshed without filtering.

## 🔗 Connections (1)

- ← Dependency: [[Filter (GUIElement 1382361)]]

## 📊 Appears In (1 diagrams)

- Custom: Financing Package - Assign
