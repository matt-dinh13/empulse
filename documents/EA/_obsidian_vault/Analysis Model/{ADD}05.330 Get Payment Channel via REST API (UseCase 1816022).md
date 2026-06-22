---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights"
domain: "Analysis Model"
element_id: 1816022
diagrams: 6
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.330 Get Payment Channel via REST API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights

## 📝 Notes

{ADD CBL-11315 PAYM-3379}
This technical use case is triggered by calling PaymentChannelRESTAPI.getPaymentChannelDataRequest. It returns data of a payment channel fetched by the provided data exchange ID or by the provided combination of parameters.

## 🔗 Connections (6)

- ← Usage: [[PaymentChannelRestAPI V3]]
- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Usage: [[PaymentChannelRestAPI v4 (Interface 1774884)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- → Dependency: [[{ADD}05.330 Get Payment Channel via REST API]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Use Case: Access Rights
- Use Case: Payment Channel via REST WS
