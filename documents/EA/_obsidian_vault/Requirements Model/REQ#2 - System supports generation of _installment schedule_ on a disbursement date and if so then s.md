---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-864 (CBL-1586) Interest calculation from Disbursement date"
domain: "Requirements Model"
element_id: 1272249
diagrams: 1
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - System supports generation of "installment schedule" on a disbursement date and if so then supports generation of the "1st due date" and "installment amount" on the signed date.

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-864 (CBL-1586) Interest calculation from Disbursement date

## 🔗 Connections (6)

- ← Dependency «derive»: [[System supports generation of _contract term_ from the disbursement date.]]
- ← Dependency «derive»: [[System generates _installment schedule_ when payment status was changed from _Unpaid_ to _Paid_ for ]]
- ← Dependency «derive»: [[System generates _installment schedule_ when disbursement confirmation file was imported for CLW _ C]]
- → Generalization: [[CBL-1586_ _Interest calculation_ from Disbursement date]]
- ← Abstraction «derive»: [[System re-generates _1st due date_ and _installment amount_ when disbursement confirmation file was ]]
- ← Dependency «derive»: [[System re-generates _1st due date_ and _installment amount_ when payment status was changed from _Un]]

## 📊 Appears In (1 diagrams)

- Custom: CLM-864 (CBL-1586) Interest calculation from Disbursement date
