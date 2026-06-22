---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820884
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ DDM type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Type of DDM

Other:

	
- Enumeration values are taken from the DDM source (only STANDARD and EMANDATE)
	
- Visible only if switch enableDDMSourceAndType = true.


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.ddmType


	
- //LDM for value saving
CreateDDMDraftRequest.ddmType/ 
UpdateDDMOrDraftRequest.ddmType


Localization code:
DDM_DDM_TYPE

## 🔗 Connections (2)

- ← Generalization: [[DDM type (GUIElement 1820876)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
