---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations"
domain: "Data manipulation support"
element_id: 1377170
diagrams: 1
connections: 1
tags:
  - requirement
  - data-manipulation-support
---

# 📋 {ADD}Create a copy of a specific version of installment schedule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Installment schedule manipulations

## 📝 Notes

{ADD PAYM-551 CBL-691 /}

Input:

	
- contract
	
- version - original version of IS to be recreated
	
- MaximalVersion - maximal version of IS for contract


Steps:
1. System finds all inactive installments where (installmentVersion <= version from input AND deactivatedInVersion > version from input) and sets it as InstallmentsToRecreate.
2. System removes all extraordinary installments with recalculation reason 'GN' from InstallmentsToRecreate.
3. System creates a new version of installment schedule from InstallmentsToRecreate:
- For each installment it creates its copy and updates following values:
-- installment version = MaximalVersion + 1
-- deactivated in version = null
-- active flag = 1
-- creation date = current date and time
-- created by = current user
-- update date = current date and time
-- updated by = current user
- For each installment part it creates its copy and updates following values:
-- installment = newly created installment from above
-- paid amount = 0
-- fully paid date = null
-- creation date = current date and time
-- created by = current user
-- update date = current date and time
-- updated by = current user
-- data exchange id = newly generated id from sequence
4. System finds all active installments where (installmentVersion > version from input AND installmentVersion < MaximalVersion + 1) and sets it as InstallmentsToDeactivate.
5. System removes all extraordinary installments with recalculation reason 'GN' from InstallmentsToDeactivate.
6. System updates (cancels) all installments and its installment parts from :
- active flag = 0
- deactivated in version = MaximalVersion + 1
- update date = current date and time
- updated by = current user
7. System links all installments from version (MaximalVersion + 1) that are charged to some cancelled installment to a corresponding installment (with the same installment number and with version (MaximalVersion + 1)).
8. System sends INSTALMENT120 messages for all created and canceled installments to OBS if present.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Move installment schedule to a specific version]]

## 📊 Appears In (1 diagrams)

- Use Case: Installment schedule manipulations
