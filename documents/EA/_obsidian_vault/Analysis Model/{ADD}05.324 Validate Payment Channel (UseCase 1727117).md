---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights"
domain: "Analysis Model"
element_id: 1727117
diagrams: 3
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.324 Validate Payment Channel 

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights

## 📝 Notes

{ADD CBL-9626 PAYM-2943}
This technical use case is triggered by calling PaymentChannelWs.validatePaymentChannel(). It validate payment channel by its dataExchangeId, so it is usable by PAYM and its data are sufficient for disbursing money.

## 🔗 Connections (3)

- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[{ADD}05.324 Validate Payment Channel]]
- ← UseCase: [[Loan Origination (Actor 1880864)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: PaymentChannelWSV3 - Validate Payment Channel
- Use Case: Payment Channels via WS
