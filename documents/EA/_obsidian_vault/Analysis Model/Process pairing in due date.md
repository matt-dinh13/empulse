---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855613
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Process pairing in due date

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: PAIR_ON_DUE_DATE
Description: if the global parameter PAIR_TO_PREPAYMENT_TILL_DUE_DATE is enabled, the job performs incoming payments recouple on loans having:

	
- due date of any active instalment (excluding the prepayment installment part type) = current date
	
- contract status in N, A, L
	
- active at least one installment with installment part type Prepayment or having non-zero DebtCatalogue.PrepaymentAmount


Used for: UC 08.180

Number of starts min: 1 per day
Time of start: after processing of incoming payments
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- ← Realisation: [[05.201 Pair payments to due instalment]]
- → Dependency: [[After processing of incoming payments]]

## 📊 Appears In (3 diagrams)

- Custom: Automatic jobs
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Use Case: Pair prepayments to due instalments
