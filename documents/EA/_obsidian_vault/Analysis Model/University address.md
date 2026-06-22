---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN"
domain: "Analysis Model"
element_id: 1686098
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 University address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN

## 📝 Notes

When user selects:
selects particular university from the list of universities (dynamic search), fields in Employer/University address section will be filled with university address (from Address) and not editable.

	
- enters new non-list university, fields in Employer/University address panel will be empty and editable. If user afterwards changes 


If user afterwards:

	
- deletes selected "list" university or changes/enters "non-list" university, values in address fields will be deleted and fields editable.
	
- change "non-list" university to another "non-list" university, values in address fields will not be deleted

## 🔗 Connections (1)

- ← Dependency: [[Name (GUIElement 1107624)]]

## 📊 Appears In (1 diagrams)

- Custom: IN - Business rules
