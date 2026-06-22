---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773454
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

This panel is created for each document created/added to the application form. 
LDM Source:

	
- Temporary_Application->TempAppl_Document


	
- Temporary_Application->TempAppl_2_Document - document data are taken from DMS. In this case document panel is non editable.
	
- manually added



Other:
In case of photo acquiring type conflicts across multiple document containers, the applicable photo acquiring type is selected according to the rule Photo acquiring type priority.

## 🔗 Connections (1)

- → Dependency: [[Photo acquiring type priority]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF
