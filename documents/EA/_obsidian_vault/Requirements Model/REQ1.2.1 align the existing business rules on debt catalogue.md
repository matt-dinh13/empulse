---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job"
domain: "Requirements Model"
element_id: 1360926
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ1.2.1 align the existing business rules on debt catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job

## 📝 Notes

The prepayment installment exists only fully paid, no debt exists on this type of installment. Therefore no change on debt calculation on Other (no principal, interest, penalty or fees) installments is needed.

## 🔗 Connections (2)

- → Dependency: [[Overdue Debt on Other Installments]]
- ← Association: [[REQ1.2 New SUMOFPREPAYMENT in debt catalogue and New business rule for its calculation]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
