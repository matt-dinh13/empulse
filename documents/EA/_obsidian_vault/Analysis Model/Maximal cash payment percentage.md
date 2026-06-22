---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823033
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Maximal cash payment percentage

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Maximal value of cash payment defined as percentage from Total Price. 
The field is displayed only if option Consumer loan is checked and ProductCalculatorParameters.MaxCashPaymentPercentage = True.
Rules for entering are defined by Maximal Cash Payment Entering.

Note:
Take in account that Maximal cash payment percentage is only auxiliary item for calculation of Maximal cash payment amount and is not used in any further steps.

Localization code: PRD_CashPaymentMaxPerc

## 🔗 Connections (3)

- → Dependency: [[Maximal Cash Payment Entering]]
- → Dependency: [[Percentage (0-100)]]
- → Dependency: [[Mandatory when visible]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator
