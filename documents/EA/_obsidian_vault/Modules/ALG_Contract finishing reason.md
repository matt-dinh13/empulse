---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Business Rules"
domain: "Modules"
element_id: 1801805
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ALG_Contract finishing reason

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Business Rules

## 📝 Notes

Evaluation of contract finishing reason and note for contract:

	
- If exists installment part of active installment in last version of installment schedule of contract with recalculation reason = 'GP' then return reason 'GIFT_PAYMENT' and Note = NULL
	
- If exists installment part of active installment in last version of installment schedule of contract with recalculation reason = 'GR' then return reason 'GRACE_PERIOD' and Note = NULL
	
- If exists installment part of active installment in last version of installment schedule of contract with recalculation reason = 'CT' then
- Search for the last Early Repayment Request(ERR) where ERR.SuccessfulCompletionDate is not NULL and Archive = FALSE AND RequestType = 'CET' ; ordered by ERR.SuccessfulCompletionDate ASC
- Return ERR.Reason, ERR.Note
	
- Else (i.e. no installments exist on the contract or any installment parts meet the conditions above) returns reason 'REPAID' and Note = NULL

## 🔗 Connections (1)

- ← Dependency: [[Set contract status to Finished rule]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Contracts finishing
