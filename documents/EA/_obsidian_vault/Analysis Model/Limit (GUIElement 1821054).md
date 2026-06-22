---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821054
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Limit

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Upper limit of the direct debit mandate.

LDM source:

	
- /Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
GetDDMResponse.ddmData.limit.amount + " " + .currency

or

	
- //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
DDM.Limit


Localization code:
GEN_Limit

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
