---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF"
domain: "Analysis Model"
element_id: 1820765
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ DDM type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of repayment - product AF

## 📝 Notes

Type of DDM

Other:

	
- Enumeration values are taken from the DDM source (only STANDARD and EMANDATE)
	
- Visible only if switch enableDDMSourceAndType = true.


	
- Selected value affects fields in DDM bank account panel - see its details.


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.ddmType


	
- //LDM for value saving
CreateDDMDraftRequest.ddmType/ 
UpdateDDMOrDraftRequest.ddmType


Localization code:
DDM_DDM_TYPE

## 🔗 Connections (2)

- ← Generalization: [[DDM type]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Way of repayment - product AF
