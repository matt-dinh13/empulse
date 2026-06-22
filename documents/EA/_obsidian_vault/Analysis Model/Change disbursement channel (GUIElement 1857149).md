---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857149
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Change disbursement channel

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Button for updating the disbursement payment channel (disbursement payment channel's attributes).

Hidden if the application is based on a SAI product type (i.e. Contract.Contract_Type = 'SAI').

Activates 01.661 Change application disbursement payment channel use case

Other:
In case the application is not based on an offer with cash initial transaction type (i.e. Contract-.Offer_Financial_Parameters.Initial_Transaction_Type != 'CASH'), then this button is disabled and message MSG_ForCashTransactionType is displayed in a tooltip (see the rule Displaying tooltips).

Localization code:
ContractTO_changeDisbursementChannel_Link

## 🔗 Connections (2)

- → Dependency: [[Displaying tooltips]]
- → Dependency: [[{MOD}01.661 Change application disbursement payment channel]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
