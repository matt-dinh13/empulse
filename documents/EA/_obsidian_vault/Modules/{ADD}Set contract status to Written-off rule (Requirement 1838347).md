---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Business Rules"
domain: "Modules"
element_id: 1838347
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Set contract status to Written-off rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Business Rules

## 📝 Notes

{ADD CLM-4405/}
This is a rule to set contract status to Written-off.

Inputs:

	
- user
	
- reason


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Written-off'
	
- System saves information about status/sub-status transitions:
- Contract_Status_Transitions.Creation_date = 'current date'
- Contract_Status_Transitions.Created_by = input_user
- Contract_Status_Transitions->Contract_Status_Transitions_Reasons is set based on user input
- Contract_Status_Transitions.Status = 'Written-off'
- Contract_Status_Transitions.Reason = input_reason
	
- System deletes Contract.Substatus if any.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Contract write-off (UseCase 1841728)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Contract write-off
