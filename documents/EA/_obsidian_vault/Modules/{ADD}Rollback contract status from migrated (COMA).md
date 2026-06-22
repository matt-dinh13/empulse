---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Business Rules"
domain: "Modules"
element_id: 1881519
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Rollback contract status from migrated (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract migration/Business Rules

## 📝 Notes

{ADD CLM-7630/}
This is a rule to rollback contract status from MIGRATED to previous status.

Input:

	
- user
	
- required date


Steps:

	
- System find previous status before MIGRATED status (use contract status transition table and previous record related to last record with MIGRATED status).
	
- System performs contract setting:
- Contract.Status is set to previous status 
	
- System saves information about status/sub-status transitions into Contract.ContractStatusTransitions:
- CreationDate = 'current date'
- PerformedBy = input_user
- Reason = 'MIGRATION_ROLLBACK'
- Status = previous status
	
- System deletes Contract.Substatus.


Steps 1 and 2 have to be performed in one transaction.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Contract migration rollback via API]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-31177 (CLM-7630) Migrated contract support
- Use Case: Use Case Model
