---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract cancellation/Business Rules"
domain: "Modules"
element_id: 1807298
diagrams: 4
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Set contract status to Cancelled rule (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract cancellation/Business Rules

## 📝 Notes

{ADD CLM-6038/}
This is a rule to set contract status to Cancelled.

Input:

	
- user
	
- reason
	
- required date


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Cancelled'
	
- System saves information about status/sub-status transitions into Contract.ContractStatusTransitions:
- CreationDate = 'current date'
- PerformedBy = input_user
- Reason = input_reason
- Status = 'Cancelled'
	
- System deletes Contract.Substatus.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (1)

- ← Usage: [[{ADD}Contract cancel via API]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-23420 (CLM-6038) Contract cancellation API
- Use Case: Cancel contract after sign
- Use Case: Contract cancellation
