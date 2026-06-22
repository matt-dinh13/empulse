---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds"
domain: "Analysis Model"
element_id: 1344906
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Cancel payment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Process outgoing payment for refunds

## 📝 Notes

Invokes 05.516 Cancel unpaid outgoing payment for refund use case.

Enabled:
Only if RefundItem[random from passed items]->RefundOrder[where ActiveFlag=true]->OutgoingPayment.Status = Unpaid
In case any relation does not exist (i.e. no relation from RefundItem to RefundOrder etc,) the button is disabled as well.

Localization code:
PAY_CancelOutgoingPayment

## 🔗 Connections (1)

- → Dependency: [[05.516 Cancel unpaid outgoing payment for refund (UseCase 1877127)]]

## 📊 Appears In (1 diagrams)

- Custom: Process outgoing payment for refunds
