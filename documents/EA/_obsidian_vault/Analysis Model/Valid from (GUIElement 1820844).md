---
type: GUIElement
stereotype: "date"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)"
domain: "Analysis Model"
element_id: 1820844
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Valid from

> **Type**: GUIElement · **Stereotype**: «date»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)

## 📝 Notes

Date, since when the direct debit mandate is valid from.

Not editable - read only.

LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Valid_From
or
GetDDMResponse.ddmData.validFrom
	
- //LDM for value saving
Contract->DDM.Valid_From
or
CreateDDMDraftRequest.validFrom / 
UpdateDDMOrDraftRequest.validFrom


Localization code:
GEN_ValidFrom

## 📊 Appears In (1 diagrams)

- Custom: Create/Update DDM
