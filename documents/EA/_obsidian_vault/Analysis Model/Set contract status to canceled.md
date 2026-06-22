---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878890
diagrams: 7
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Set contract status to canceled

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

This is a functionality describing which actions have to be performed when a contract is required to be moved to status 'Canceled'.

Inputs:

	
- user
	
- reason
	
- notice


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Canceled'
	
- System saves information about status/sub-status transitions:
- Contract_Status_Transitions.Creation_date = 'current date',
- Contract_Status_Transitions.Performed_by = input_user,
- Contract_Status_Transitions->Contract_Status_Transitions_Reasons is set based on input_reason,
- Contract_Status_Transitions.Status = 'Canceled',
- Contract_Status_Transition.Notice is set based on input_notice (if passed).
	
- System deletes Contract.Substatus.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (10)

- ← Dependency: [[{MOD}01.130 Process application sent for manual identification]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
- ← Dependency: [[01.740 Process notification about credit account closure (UseCase 1839633)]]
- ← Dependency: [[01.333 Cancel active contract service]]
- ← Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← Dependency: [[01.360 Cancel contract (UseCase 1850507)]]
- ← Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- ← Dependency: [[01.332 Cancel signed contract service (UseCase 1850503)]]
- ← Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- ← Dependency: [[01.445 Cancel undisbursed contract (UseCase 1850500)]]

## 📊 Appears In (7 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: Cancel contract
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract manually
- Use Case: Cancel contract on external request
- Use Case: Client identification
