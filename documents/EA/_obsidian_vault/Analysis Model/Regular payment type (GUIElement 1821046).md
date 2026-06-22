---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821046
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Regular payment type

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Type of regular payments for the direct debit mandate.

LDM source:

	
- /Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
Regular_Payment_Type[.Code=GetDDMResponse.ddmData.regularPaymentData.regularPaymentTypeCode].Name

or

	
- //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
DDM.Regular_Payment_Type->Regular_Payment_Type.Name


Localization code:
DDM_RegularPaymentType

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
