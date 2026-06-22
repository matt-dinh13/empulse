---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773459
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Add

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Adds new document panel for document of selected type.

Based on parameter applicationForm.createDocumentsInDMS documents are created:

	
- parameter set to TRUE then via DMS module with attributes value When_Created = 'Check_Moment_Type flag'


	
- parameter set to FALSE then as TempAppl_Document with attributes value When_Created = 'Check_Moment_Type flag' and Removable = 'Yes' for created document objects.


Localization codes:
DOC_Add

## 🔗 Connections (1)

- → Dependency: [[Document management (Requirement 1822842)]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF
