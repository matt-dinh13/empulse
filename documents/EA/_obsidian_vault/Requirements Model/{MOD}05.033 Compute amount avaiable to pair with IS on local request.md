---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date"
domain: "Requirements Model"
element_id: 1854309
diagrams: 3
connections: 2
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}05.033 Compute amount avaiable to pair with IS on local request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date

## 📝 Notes

This UC is used for calculation of amount which should be pair to contract if no overpayment is allowed. Used only for CEL loans.

## 🔗 Connections (2)

- ← Dependency: [[PaymentPairingService (Interface 1157783)]]
- → Realisation: [[REQ#1 Adding validations to all functionalities depending on existence of an installment schedule]]

## 📊 Appears In (3 diagrams)

- Custom: IS-345 (CBL-1586) Interest calculation from Disbursement date
- Logical: PaymentPairingService - compute amount to pairing 
- Use Case: OVERVIEW - Installment Schedule
