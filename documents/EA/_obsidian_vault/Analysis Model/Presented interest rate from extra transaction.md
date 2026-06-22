---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857128
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Presented interest rate from extra transaction

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Presented interest rate applicable for the application's extra transaction (based on the selected product offer).

LDM source:
Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Presented_Interest_Rate[->Presented_IR_Setting.Case='STANDARD' and .Order='2'].Value

Localization code:
PRD_InterestRateExtra

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
