---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Business rules"
domain: "Analysis Model"
element_id: 1834844
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Validation rules for Write-offs

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Business rules

## 📝 Notes

{ADD CLM-5027/}

Summary: Rules for checking contracts intended for write-off

System performs the following set of checks for every contract:
 

	
- If a contract is already written off (Status = 'H'), then it is excluded from WO with reason 'Contract is already written off.'
	
- If a contract  is REL type (Contract.Contract Type = REL), then it is excluded from the WO with reason 'REL contract type is not supported'
	
- If a contract  is SAI type (Contract.Contract Type = SAI) AND {ADD CBL-10294}(CLM Feature Flag enableSAIWithInstallments = FALSE OR Contract.Has Installments = FALSE){/ADD}, then it is excluded from the WO with reason MSG_WO_SAItypeUnsupported; e.g. 'SAI contract type (without installments) is not supported'
	
- If a contract is not in some of these statuses: Active, Paid-off, or has not the installment schedule, it is excluded from the WO with reason 'Invalid status'
	
- If a contract is not terminated (Status is not "paid-off") and has unpaid installments with Due date > WO date, Termination of the contract to WO date is requested
	
- If a contract is not terminated (Status is not "paid-off") and the last installment due date is after WO date, Termination of the contract to WO date is requested.
	
- If a contract is not terminated (Status is not "paid-off") and the last installment due date is in the past,  No action is requested (only standard WO is performed)
	
- If a contract is terminated (Status ="paid-off"), but the due date of the termination installment is after WO date, Change Termination Date to WO due date is requested.

## 🔗 Connections (1)

- ← Dependency: [[01.550 Write-off CEL contract]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CLM-5027 - Start to populate amortized contracts tables for LCS CEL contracts write-off
- Use Case: Write-off CEL contract
