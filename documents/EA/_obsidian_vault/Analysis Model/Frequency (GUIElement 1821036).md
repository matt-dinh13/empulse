---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821036
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Frequency

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Frequency of payments for the direct debit mandate.

LDM source:

	
- /Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
DDM_Frequency_Type[.Code=GetDDMResponse.ddmData.ddmFrequency].Name

or

	
- //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
DDM.Frequency_Type->DDM_Frequency_Type.Name


Localization code:
GEN_Frequency

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
