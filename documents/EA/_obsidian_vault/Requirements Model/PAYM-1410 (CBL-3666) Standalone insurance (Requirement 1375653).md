---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance"
domain: "Requirements Model"
element_id: 1375653
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1410 (CBL-3666) Standalone insurance

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1410 (CBL-3666) Standalone insurance

## 📝 Notes

Installment schedule:
Allow creation of installment schedule with FP: Net credit amount = 0, AIR = 0, Terms = 1, First due date = regularly calculated date, Annuity = 0 or Insurance amount.
*We shoud support only insurance fee with IN_INSTALLMENT charging periodicity (TO_PRINCIPAL doesn't make sense from accounting point of view).*
Debt catalogue should not be generated.
Should not be included in calculation of LAP vector attributes.

Outgoing payments:
CLM will call 05.090 also for SAI-NDF contracts during signing. We need to allow calculation of PTR for product type SAI (and initial transaction type NDF).
PTR payment can be created in case of a non-zero service related subvention.
PTR payment for SAI will not be switched to status U during standard moments of payment (those will be used only for CEL).
Potential PTR payment will be generated in status W and it will be switched to status U during processing of COP (only for SAI!).
INS payment to insurance company may stay as-is, but it will be ignored by IN side anyway.

Incoming payment + contract finishing:
If COP is created with forbidden small underpayment, then no changes to incoming payments are necessary.
Using COP configuration, a contract can be finished automatically after successful (automatic) COP processing.

Take care of all switches for product/contract type (CEL/REL) in order to support/consider a new type!
Payment Channel 2 Product Type entries will be added by LOR.

## 🔗 Connections (4)

- ← Generalization: [[REQ#4 Support new contract_product type in the code]]
- ← Generalization: [[REQ#1 Update basic IS algorithm to comply with SAI product type]]
- ← Generalization: [[REQ#2 Generate PTR payment for SAI contract]]
- ← Generalization: [[REQ#3 Incoming payment support for SAI contract]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1410 (CBL-3666) Standalone insurance
