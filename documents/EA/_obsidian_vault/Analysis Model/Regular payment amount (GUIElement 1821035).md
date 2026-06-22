---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821035
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Regular payment amount

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Amount of regular payments for the direct debit mandate.

LDM source:

	
- /Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
GetDDMResponse.ddmData.regularPaymentData.regularPaymentAmount.amount + " " + .currency

or

	
- //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
DDM.Regular_Payment_Amount


Localization code:
DDM_RegularPaymentAmount

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
