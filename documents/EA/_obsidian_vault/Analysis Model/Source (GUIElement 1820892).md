---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820892
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Source

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Source of DDM

Other:

	
- Enumeration values are taken from the DDM source.
	
- Visible only if switch enableDDMSourceAndType = true.
	
- System affects other DDM field, based on selected value. See Selecting source of DDM


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.extendedProperties[.key=SOURCE].value


	
- //LDM for value saving
CreateDDMDraftRequest.extendedProperties[.key=SOURCE].value / 
UpdateDDMOrDraftRequest.extendedProperties[.key=SOURCE].value


Localization code:
DDM_DDM_Source

## 🔗 Connections (2)

- ← Generalization: [[Source (GUIElement 1820870)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
