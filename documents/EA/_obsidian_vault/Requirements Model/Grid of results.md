---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA"
domain: "Requirements Model"
element_id: 1822423
diagrams: 3
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Grid of results

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA

## 📝 Notes

For each panel Ax with filter criteria is defined panel Bx with grid of results. This means, for each grid exist definition which columns should be shown. The last column of each grid is used for functional buttons that allow running use cases.
Its important there is a difference from the common description in general rules for use case specifications:

	
- every functional button is shown only in case, user has right to run associated use case (the same as in general rules)
	
- every functional button is shown only in case, preconditions of associated use case are met (difference against general rule)

Every grid, its columns and functional buttons with use cases are described in the following chapters.

Grid will be horizontally scrollable.
Paging: Yes. Number of rows is defined by Global parameter DefaultMaxNumberOfResults.

Localization code: GEN_SearchResults

## 📊 Appears In (3 diagrams)

- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
- Custom: Search for contract
- Custom: Search for contract UI
