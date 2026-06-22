---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878885
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Set contract status to rejected

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

This is a functionality describing which actions have to be performed when a contract is required to be moved to status 'Rejected'.

Input:

	
- Rejection Reason - A reason of rejection is passed from the invoking use case.
	
- Note  - additional note for contract rejection (optional)


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Rejected'
	
- System saves information about status/sub-status transitions:
- Contract_Status_Transitions.Creation_date = 'current date'
- Contract_Status_Transitions.Performed_by = 'current user'
- Contract_Status_Transitions->Contract_Status_Transitions_Reasons is set based on Rejection Reason from input
- Contract_Status_Transition.Notice is set based on Note from input.
- Contract_Status_Transitions.Status = 'Rejected'
	
- System deletes Contract.Substatus.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}06.051 Process customers notification message]]
- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (3 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: Client identification
- Use Case: Receive evaluation results
