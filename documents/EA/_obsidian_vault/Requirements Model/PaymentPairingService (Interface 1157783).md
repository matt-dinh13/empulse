---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans"
domain: "Requirements Model"
element_id: 1157783
diagrams: 3
connections: 8
tags:
  - interface
  - requirements-model
---

# 🔶 PaymentPairingService

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans

## 📝 Notes

{ADD CBL-29 PAY /}
Service to sychronnous  pairing and unpairing incoming payment to CEL installment schedule.

## 🔗 Connections (8)

- → Dependency: [[ComputeAmountToPairingResponse]]
- → Dependency: [[05.061 Decouple incoming payments from IS on local request (UseCase 1854317)]]
- → Dependency: [[PairPaymentRequest]]
- → Dependency: [[PairPaymentResponse]]
- → Dependency: [[{MOD}05.033 Compute amount avaiable to pair with IS on local request]]
- → Dependency: [[ComputeAmountToPairingRequest]]
- → Dependency: [[05.031 Couple incoming payments with IS on local request]]
- ← Dependency: [[REQ#4 Payment pairing service]]

## 📊 Appears In (3 diagrams)

- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Logical: PaymentPairingService - compute amount to pairing 
- Logical: PaymentPairingService - pair and unpari payment
