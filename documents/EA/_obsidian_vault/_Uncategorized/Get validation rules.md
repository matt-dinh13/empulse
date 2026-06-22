---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1731354
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get validation rules 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

- System gets the Initial state of document attribute for each applicable document attribute of validated document type (i.e. for each Document_Type->Document_Type_Attribute[.Active_Flag=TRUE]).
	
- With the respective processed application (i.e. Temporary_Application or Contract based on where the validation is triggered from) and all documents related to such application (i.e. TempAppl_Document or Client_Document/Contract_Document/DDM_Document->Document), system gets the Update state of document attribute.
