---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Business Rules"
domain: "Modules"
element_id: 1867043
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Set contract status to Cancelled rule (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Business Rules

## 📝 Notes

This is a rule to set contract status to Cancelled (T).

Input:

	
- user
	
- reason
	
- required date


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Cancelled'
	
- System saves information about status/sub-status transitions into Contract.Contract Status Transitions:
- CreationDate = 'current date'
- PerformedBy = input_user
- Reason = input_reason
- Status = 'T' (Cancelled)
	
- {DEL DOBA-279}System deletes Contract.Substatus.{/DEL}


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Process Account Closure notification]]
- ← Usage: [[{ADD}Contract cancel via API (UseCase 1869937)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Contract cancellation
- Use Case: Processing Account Closure notification - Use Case Model
