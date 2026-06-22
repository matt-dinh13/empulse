---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857135
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Show disbursement channel change request

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Button for showing the disbursement payment channel change request (in order to evaluate and eventually approve/reject/revoke such request).

Visible only if any new change request exists for the disbursement payment channel (i.e. Contract->Payment_Channel[.Purpose='DI']->Disbursement_Channel_Change_Request[.Status='NEW'] exists).

Activates the 01.664 Show disbursement channel change request use case.

Localization code:
CON_ShowDisbChannelChangeRequest

## 🔗 Connections (1)

- → Dependency: [[01.664 Show disbursement channel change request (UseCase 1846352)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
