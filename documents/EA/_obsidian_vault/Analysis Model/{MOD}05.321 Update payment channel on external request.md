---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights"
domain: "Analysis Model"
element_id: 1727113
diagrams: 6
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.321 Update payment channel on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights

## 📝 Notes

{ADD PAYM-580 /}
This technical use case is triggered by calling PaymentChannelWs.updatePaymentChannel(). It updates the provided payment channel with data provided in PaymentChannelDto.

## 🔗 Connections (7)

- ← Dependency «invokes»: [[PaymentChannelWS (Interface 1502835)]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]
- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[{ADD}05.321 Update payment channel on external request]]
- ← UseCase: [[Contract Management (Actor 1880867)]]
- ← UseCase: [[Loan Origination (Actor 1880864)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: PAYM-1613 - other methods
- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Update Payment Channel
- Logical: PaymentChannelWSV3 - Update Payment Channel
- Use Case: Payment Channels via WS
