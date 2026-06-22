---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights"
domain: "Analysis Model"
element_id: 1816021
diagrams: 6
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.331 Create And Validate Payment Channel via REST API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights

## 📝 Notes

{ADD CBL-11267 PAYM-3378}
This technical use case is triggered by calling PaymentChannelRESTAPI.CreateAndValidatePaymentChannel method. It creates a new payment channel for the given contract with provided information.
After creation, system performs validation of created payment channel and if there is some validation error, whole process is reverted and no payment channel is created.

## 🔗 Connections (9)

- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Usage: [[PaymentChannelRestAPI v4 (Interface 1774884)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- ← Usage: [[PaymentChannelRestAPI V3]]
- → Dependency: [[{ADD}05.331 Create And Validate Payment Channel via REST API]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[Validate Payment channel via REST API]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Logical: PaymentChannelRestAPI - Create and Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel
- Use Case: Access Rights
- Use Case: Payment Channel via REST WS
