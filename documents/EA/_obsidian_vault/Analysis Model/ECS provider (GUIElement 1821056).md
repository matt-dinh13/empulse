---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821056
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ ECS provider

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Name of the ECS provider used for processing the direct debit mandate.

LDM source:

	
- /Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
ECS_Provider[.Code=GetDDMResponse.ddmData.providerData[.providerType is not null and .providerType != 'DD'].providerCode].Name

or

	
- //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
DDM.ECS_Provider->ECS_Provider.Name


Localization code:
DD_ECSprovider

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
