---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Add/Edit document (modal window)"
domain: "Analysis Model"
element_id: 1547879
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Add/Edit document (modal window)

## 📝 Notes

Type of the document (document type's name).


For creating a new document:

	
- Field editable.
	
- Enumeration values retrieved from Document Type according to the rules described in applicable use case:
   - 01.103 Add client document
   - 01.100 Add contract document
   - 01.102 Add DDM document


For editing the existing document:

	
- Field not editable.



LDM source:
Document->Document_Type.Name

Localization code:
DOC_Type

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Add/Edit document
