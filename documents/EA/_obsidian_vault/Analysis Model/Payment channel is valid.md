---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Diagrams/Activity diagram - active contract"
domain: "Analysis Model"
element_id: 1825421
diagrams: 1
connections: 4
tags:
  - decision
  - analysis-model
---

# 🔀 Payment channel is valid

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Diagrams/Activity diagram - active contract

## 🔗 Connections (4)

- ← ControlFlow: [[Ticket is send to OP for valiadation]]
- → ControlFlow: [[Request is revoked MANUALY by BO team, payment channel data are NOT changed]]
- → ControlFlow: [[Ticket is rejected]]
- → ControlFlow: [[Ticket is approved]]

## 📊 Appears In (1 diagrams)

- Activity: Change disbursement channel - active contract
