---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880962
diagrams: 5
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.098 Create outgoing payment on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

This technical use case is triggered by calling OutgoingPaymentsWS.createOutgoingPayment() and creates an outgoing payment for a specified contract, payment type, amount and payment channel.

UC triggers OutgoingPaymentCreatedSE system event.

## 🔗 Connections (5)

- ← Dependency «invoke»: [[OutgoingPaymentsWS (Interface 1527586)]]
- → Dependency: [[{ADD}Generate INR outgoing payment]]
- → Dependency: [[{MOD}Generate outgoing payment for contract]]
- → Dependency: [[{ADD}Generate INS outgoing payment]]
- → Dependency: [[{ADD}05.098 Create outgoing payment on external request]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: PAYM-1290 (CBL-2620) New insurance types for REL products
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Logical: OutgoingPaymentsWS
- Use Case: Generate and Cancel outgoing payments
