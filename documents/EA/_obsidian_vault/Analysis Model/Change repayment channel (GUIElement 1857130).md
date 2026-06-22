---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857130
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Change repayment channel

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Button for updating the repayment channel (repayment channel's attributes).

Hidden if the application is based on a REL or SAI product type (i.e. Contract.Contract_Type in ('REL', 'SAI')).

Activates 01.659 Change application repayment payment channel

Localization code:
CON_RepaymentChannelChange

## 🔗 Connections (1)

- → Dependency: [[01.659 Change application repayment payment channel (UseCase 1833499)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
