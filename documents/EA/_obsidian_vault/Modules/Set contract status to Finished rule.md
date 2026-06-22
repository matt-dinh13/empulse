---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Business Rules"
domain: "Modules"
element_id: 1801804
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Set contract status to Finished rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Business Rules

## 📝 Notes

This is a rule to set contract status to FINISHED.
Input:

	
- user
	
- Transferred_Manually (default value FALSE)


	
- Reason
	
- Notice


Steps:
1. Setting for Contract:

	
- Contract.Status is set to 'K' (FINISHED)


2 Setting for Contract Transition:

	
- Contract->Contract_Status_Transitions.Status = 'K'


	
- If Reason is defined on input then
-- Contract->Contract_Status_Transitions.Reason = Reason from input
-- Contract->Contract_Status_Transitions.Notice = Notice from input
else
-- Contract->Contract_Status_Transitions.Reason, Contract_Status_Transitions.Notice = result of ALG_Contract finishing reason
	
- Contract->Contract_Status_Transitions.Creation_date = 'current date'
	
- Contract->Contract_Status_Transitions.Performed_by = input_user
	
- Contract->Contract Status Transition.Transferred Manually = Transferred_Manually


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (2)

- → Dependency: [[ALG_Contract finishing reason]]
- ← Dependency: [[Finish Contract based on Account Balance notification]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Contract finishing automatically
- Use Case: Contracts finishing
