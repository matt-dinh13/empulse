---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights"
domain: "Analysis Model"
element_id: 1846350
diagrams: 7
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.668 Create request for change disbursement channel

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Access Rights

## 📝 Notes

This is a technical use case. It describes how the system creates a request for change disbursement channel and performs related actions.

## 🔗 Connections (6)

- ← UseCase «include»: [[{MOD}01.425 Update DDM]]
- → Realisation: [[Requirement1 - Verify change of disbursement payment channel]]
- → Dependency: [[Requirment 1]]
- → Dependency: [[Requirement2 - Business event after change of payment channel]]
- → Realisation: [[01.668 Create request for change disbursement channel]]
- ← UseCase «include»: [[{MOD}01.662 Change disbursement channel]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: PAYM-1097 (CBL-1093) Loan disbursement to any card
- Custom: PAYM-1365 (CBL-3841) - BSL - send request to CEV to verify card data
- Custom: PAYM-1613 - other methods
- Custom: PAYM-5786 (CBL-27569) - Monitoring improvement of disbursement channel change post contract registration - ANA - HoSel-Contract&Payments
- Use Case: Change disbursement channel
- Use Case: Create/Update/Receive DDM
