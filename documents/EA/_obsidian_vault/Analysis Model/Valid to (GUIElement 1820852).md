---
type: GUIElement
stereotype: "date"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)"
domain: "Analysis Model"
element_id: 1820852
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Valid to

> **Type**: GUIElement · **Stereotype**: «date»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)

## 📝 Notes

Date, until when the direct debit mandate is valid to (inclusive).

Not editable - read only.

LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Valid_To
or
GetDDMResponse.ddmData.validTo
	
- //LDM for value saving
Contract->DDM.Valid_To
or
CreateDDMDraftRequest.validTo / 
UpdateDDMOrDraftRequest.validTo


Localization code:
GEN_ValidTo

## 📊 Appears In (1 diagrams)

- Custom: Create/Update DDM
