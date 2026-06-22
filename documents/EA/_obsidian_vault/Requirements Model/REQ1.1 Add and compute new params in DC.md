---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications"
domain: "Requirements Model"
element_id: 1381157
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ1.1 Add and compute new params in DC

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications

## 📝 Notes

Contract debt catalogue - two new parameters

Calculation - debt catalogue
get collection of all active not fully paid instalments ordered by due date asc (excluding the prepayment instalments) and check how many instalments can be paid by current prepayment amount - get due date of the first not fully paid instalment
- get remaining amount of the first not fully paid instalment not covered by prepayment amount

next installment due date with prepay - compare how many future standard instalments can be covered by current pre-transfer balance and get the nearest future instalment due date not covered by current pre-transfer balance

next installment amount with prepay- get the remaining instalment amount not covered by pre-transfer balance (nearest future instalment  amount not covered by current pre-transfer)

total remaining debt with prepay = total outstanding debt on contract - current pre-transfer balance

Constraint: all these fields are displayed only when GP PairToPrepaymentTillDueDate is enabled

## 🔗 Connections (1)

- ← Association: [[REQ1_ Add new params in DC, calculation and interface change]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications
