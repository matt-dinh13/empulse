---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857146
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Presented interest rate from initial transaction

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Presented interest rate applicable for the application's initial transaction (based on the selected product offer).

LDM source:
Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Presented_Interest_Rate[->Presented_IR_Setting.Case='STANDARD' and .Order='1'].Value

Localization code:
PRD_InterestRateInitial

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
