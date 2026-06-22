---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1816020
diagrams: 4
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.333 Create Payment Channel Draft via REST API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3628}
This UC creates a payment channel and allows creating incomplete payment channels for situations, where the client or other system components doesn't have all the necessary information which the payment channel requires.

## 🔗 Connections (6)

- ← Usage: [[PaymentChannelRestAPI V3]]
- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Usage: [[PaymentChannelRestAPI v4 (Interface 1774884)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- → Dependency: [[{MOD}Saving of Payment Channels]]

## 📊 Appears In (4 diagrams)

- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Use Case: Payment Channel via REST WS
