---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Business Rules"
domain: "Analysis Model"
element_id: 1839165
diagrams: 4
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Set contract status to Finished rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Business Rules

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

## 🔗 Connections (3)

- → Dependency: [[ALG_Contract finishing reason (Requirement 1839166)]]
- ← Dependency: [[01.740 Process notification about credit account closure (UseCase 1839633)]]
- ← Dependency: [[01.730 Finish contract manually (UseCase 1852803)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Use Case: Contract finishing manually
- Use Case: Processing a notification about credit account closure
- Use Case: REL contract termination request
