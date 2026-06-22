---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Business Rules"
domain: "Modules"
element_id: 1867050
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Set contract status to Finished rule (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Business Rules

## 📝 Notes

This is a rule to set contract status to FINISHED.
Input:

	
- user
	
- Transferred_Manually (default value FALSE)


	
- Reason
	
- Notice (optional)


Steps:
1. Setting for Contract:

	
- Contract.Status is set to 'K' (FINISHED)


2 Setting for Contract Transition:

	
- Contract->Contract_Status_Transitions.Status = 'K'


	
- If Reason is defined on input then
-- Contract->Contract_Status_Transitions.Reason = Reason from input
-- Contract->Contract_Status_Transitions.Notice = Notice from input
{DEL DOBA-279}else
-- Contract->Contract_Status_Transitions.Reason, Contract_Status_Transitions.Notice = result of ALG_Contract finishing reason{/DEL}
	
- Contract->Contract_Status_Transitions.Creation_date = 'current date'
	
- Contract->Contract_Status_Transitions.Performed_by = user
	
- Contract->Contract Status Transition.Transferred Manually = Transferred_Manually


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (3)

- → Dependency: [[{DEL}ALG_Contract finishing reason]]
- ← Dependency: [[{DEL}Contracts finish]]
- ← Dependency: [[{ADD}Process Account Closure notification]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Contracts finishing
- Use Case: Processing Account Closure notification - Use Case Model
