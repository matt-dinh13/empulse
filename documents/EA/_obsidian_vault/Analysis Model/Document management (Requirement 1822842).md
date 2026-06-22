---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1822842
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Document management

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Adding:
Documents can be added in both Identification proof documents and Other documents sections:

	
- User selects document type from the combobox list and clicks Add document button (in required section)
	
- If user tries to add identification document (Document_type.Flag=ID_DOC) or client photo (Document_type.Flag='PHOTO') that is already present, system displays error message MSG_5005.
	
- System show document on application form and creates temporary structures for document type when added on application form (sets Temp_Appl_Document.Removable = 'Yes')
	
- If added document type is identification document (Document_Type.Flag=ID_DOC) or client photo (Document_type.Flag='PHOTO'), system hides selected document type from combobox list
	
- System recalculates the values in the Necessary documents grid. (Note: If AF was used for client identification, i.e. no document container was found, grid is not available). If added document has document type, which already exists on the contract, the number is not recalculated.


Removing:
Only documents with Temp_Appl_Document.Removable = 'Yes' or documents created via DMS (before save of application form can be removed from application form:

	
- User uses functionality for removing document type.
	
- System displays confirmation dialogue with MSG_0147.
	
- When user selects 'No' this alternate scenario ends. When user selects 'Yes' scenario continues with next step.
	
- System removes document from application form and removes temporary structures for document type when removed from application form
	
- If removed document type is identification document (Document_Type.Flag=ID_DOC) or client photo (Document_type.Flag='PHOTO'), system shows selected document type in combobox list
	
- System recalculates the values in the Necessary documents grid. (Note: If AF was used for client identification, i.e. no documents container was found, grid is not available). If added document has document type, which already exists on the contract, the number is not recalculated.

## 🔗 Connections (4)

- ← Dependency: [[Other documents - product AF (GUIElement 1736187)]]
- ← Dependency: [[Add (GUIElement 1773459)]]
- ← Dependency: [[Remove (GUIElement 1773452)]]
- ← Dependency: [[Document type (GUIElement 1773451)]]

## 📊 Appears In (3 diagrams)

- Custom: Common panel for document - product AF
- Custom: LOR-8855 Application form - delete document
- Custom: Product business rules
