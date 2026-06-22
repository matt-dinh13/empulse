---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights"
domain: "Analysis Model"
element_id: 1727109
diagrams: 6
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.320 Create payment channel on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights

## 📝 Notes

{ADD PAYM-580 /}
This technical use case is triggered by calling PaymentChannelWs.createPaymentChannel(). It creates a new payment channel for the given contract with provided payment purpose and bank account (id of existing or data of new one).

## 🔗 Connections (5)

- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[{ADD}05.320 Create payment channel on external request]]
- ← UseCase: [[Contract Management (Actor 1880867)]]
- ← UseCase: [[Loan Origination (Actor 1880864)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: PAYM-1290 (CBL-2620) New insurance types for REL products
- Custom: PAYM-1613 - other methods
- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV3 - Create Payment Channel
- Use Case: Payment Channels via WS
