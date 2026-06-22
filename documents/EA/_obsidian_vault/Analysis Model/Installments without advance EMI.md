---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1857027
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Installments without advance EMI

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

## 📝 Notes

Mandatory: No
Editable: No

LDM:
Difference of Installment.Installment_Type = ‘STANDARD’ - Contract.Financial_Parameters.Advance_Payments_Number

Localization code: PRD_InstallmentAmountWithoutAdvancedPayment

## 🔗 Connections (1)

- → Dependency: [[UI elements visibility]]

## 📊 Appears In (1 diagrams)

- Custom: Installment schedule
