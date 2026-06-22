---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880966
diagrams: 5
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.111 Generate outgoing payment orders automatically

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

Use case for automatic creation of outgoing payment orders

UC is triggered by OutgoingPaymentCreatedSE system event.

## 🔗 Connections (4)

- ← UseCase: [[System event]]
- → Realisation: [[05.111 Generate outgoing payment orders automatically]]
- → Realisation: [[REQ#2 - Automatic outgoing payment order generation - extension]]
- → Dependency «invokes»: [[{MOD}05.230 Process outgoing payments]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: PAYM-1016 (CBL-2763) IN HCPAY - Instant disbursement of outgoing payments
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Custom: PAYM-1721 (CBL-4621) Automatic outgoing payment disbursement for joint lending contracts
- Use Case: Process outgoing payments
