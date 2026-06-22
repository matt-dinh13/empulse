---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF"
domain: "Analysis Model"
element_id: 1820768
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Source

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF

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

- ← Generalization: [[Source (GUIElement 1820743)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Way of repayment - product AF
