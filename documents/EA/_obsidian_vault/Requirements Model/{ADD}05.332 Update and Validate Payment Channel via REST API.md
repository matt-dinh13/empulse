---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK"
domain: "Requirements Model"
element_id: 1816016
diagrams: 7
connections: 10
tags:
  - usecase
  - requirements-model
---

# 🎯 {ADD}05.332 Update and Validate Payment Channel via REST API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK

## 📝 Notes

{ADD CBL-9626 PAYM-2943}

## 🔗 Connections (9)

- ← Usage: [[PaymentChannelRestAPI V3]]
- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Usage: [[PaymentChannelRestAPI v4 (Interface 1774884)]]
- ← Usage: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- → Dependency: [[{ADD}05.332 Update Payment Channel via REST API]]
- → Dependency: [[Validate Payment channel via REST API]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- ← Dependency: [[{MOD}Unblock Outgoing Payments]]

## 📊 Appears In (7 diagrams)

- Custom: PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK
- Logical: PaymentChannelRestAPI - Update and Validate Payment Channel
- Use Case: Access Rights
- Use Case: Blocking outgoing payments
- Use Case: Payment Channel via REST WS
- Use Case: PaymentChannelRestAPI - Update And Validate Payment Channel
- Use Case: PaymentChannelRestAPI - Update And Validate Payment Channel
