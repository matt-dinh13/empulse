---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878900
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Set contract status to approved

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

This is a functionality describing which actions have to be performed when a contract is required to be moved to status 'Approved'.

Inputs:

	
- user
	
- Note  - additional note for contract approval (optional)


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Approved',
- Contract.Substatus = 'NOT PREPARED TO SIGN'
	
- System saves information about status/sub-status transitions:
- Contract_Status_Transitions.Creation_date = 'current date',
- Contract_Status_Transitions.Performed_by = input_user,
- Contract_Status_Transitions->Contract_Status_Transitions_Reasons is set to 'NULL',
- Contract_Status_Transitions.Status = 'Approved'.
- Contract_Status_Transition.Notice is set based on Note from input.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (1)

- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (2 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: Receive evaluation results
