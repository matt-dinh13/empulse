---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Business Rules"
domain: "Analysis Model"
element_id: 1839166
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 ALG_Contract finishing reason

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Business Rules

## 📝 Notes

Evaluation of contract finishing reason and note for contract:

	
- If exists installment part of active installment in last version of installment schedule of contract with recalculation reason = 'GP' then return reason 'GIFT_PAYMENT' and Note = NULL
	
- If exists installment part of active installment in last version of installment schedule of contract with recalculation reason = 'GR' then return reason 'GRACE_PERIOD' and Note = NULL 
	
- If exists installment part of active installment in last version of installment schedule of contract with recalculation reason = 'CT' then
- Search for the last Early Repayment Request(ERR) where ERR.SuccessfulCompletionDate is not NULL and Archive = FALSE AND RequestType = 'CET' ; ordered by ERR.SuccessfulCompletionDate ASC
- Return ERR.Reason, ERR.Note
	
- Else (i.e. no installments exist on the contract or any installment parts meet the conditions above) returns reason 'REPAID' and Note = NULL

## 🔗 Connections (2)

- → Dependency: [[REQ#4 Process finishing contract from CaBus]]
- ← Dependency: [[Set contract status to Finished rule (Requirement 1839165)]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
