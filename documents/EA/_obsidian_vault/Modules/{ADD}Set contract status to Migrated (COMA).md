---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Business Rules"
domain: "Modules"
element_id: 1881523
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Set contract status to Migrated (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Business Rules

## 📝 Notes

{ADD CLM-7630/}
This is a rule to set contract status to Cancelled.

Input:

	
- user
	
- required date


Steps:

	
- System performs contract setting:
- Contract.Status is set to 'Migrated' (BSL status = M)
	
- System saves information about status/sub-status transitions into Contract.ContractStatusTransitions:
- CreationDate = 'current date'
- PerformedBy = input_user
- Reason = 'MIGRATION'
- Status = 'Migrated'
	
- System deletes Contract.Substatus.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Contract migrate via API]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-31177 (CLM-7630) Migrated contract support
- Use Case: Use Case Model
