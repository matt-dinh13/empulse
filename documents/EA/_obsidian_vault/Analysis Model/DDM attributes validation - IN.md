---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules"
domain: "Analysis Model"
element_id: 1391070
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 DDM attributes validation - IN

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules

## 📝 Notes

Following attributes are mandatory additionally for India (to DDM attributes validation)

	
- MICR code (BankAccount.BankBranch.MICR)


Only for IN and loans with ProductType = CEL and InitialTransactionType=CASH:

	
- If Repayment channel is set to Other and contract is not created externally, disbursement channel must be set to PBA, otherwise GBA.
	
- If not MSG_InvalidDisbursementChannel appears.
	
- If Repayment channel is DDM and disbursement channel GBA the system checks if DDM bank account and GBA bank account is the same. If not the system stores DDM bank account to GBA structure.

## 🔗 Connections (1)

- → Generalization: [[DDM attributes validation]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
