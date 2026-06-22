---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications"
domain: "Requirements Model"
element_id: 1391740
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ3: Installment schedule header

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications

## 📝 Notes

Contract debt catalogue - two new parameters

Calculation - debt catalogue
get collection of all active not fully paid instalments ordered by due date asc (excluding the prepayment instalments) and check how many instalments can be paid by current prepayment amount - get due date of the first not fully paid instalment
- get remaining amount of the first not fully paid instalment not covered by prepayment amount

next installment due date - compare how many future standard instalments can be covered by current pre-transfer balance and get the nearest future instalment due date not covered by current pre-transfer balance

Localization code: INS_PrepayNextInstDueDate

next installment amount - get the instalment amount not covered by pre-transfer balance (nearest future instalment due date not covered by current pre-transfer balance from point 1)

Localization code: INS_PrepayNextInstAmount

total remaining debt = total outstanding debt on contract - current pre-transfer balance

Localization code: INS_PrepayNextInstDueDate

Constraint: all these fields are displayed only when GP PairToPrepaymentTillDueDate is enabled

## 📊 Appears In (1 diagrams)

- Custom: PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications
