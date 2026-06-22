---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Pay-off/Business Rules"
domain: "Modules"
element_id: 1801817
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Set contract status to paid-off rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Pay-off/Business Rules

## 📝 Notes

This is a rule to set contract status to paid-off.

Input:

	
- user
	
- reason
	
- required date


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Paid off'
	
- System saves information about status/sub-status transitions into Contract.ContractStatusTransitions:
- CreationDate = 'current date'
- PerformedBy = input_user
- Reason = input_reason
- Status = 'Paid off'
	
- System deletes Contract.Substatus.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Contract pay-off (UseCase 1851484)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Contract pay-off
