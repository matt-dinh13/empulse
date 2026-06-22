---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date"
domain: "Requirements Model"
element_id: 1623720
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Process newly imported non-working days

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1728 (CBL-4595) Change of the last due date

## 📝 Notes

{ADD CBL-4595 PAYM-1728 /}

Input:

	
- List of new non-working day entries


For each entry in DB table Non-working Day where entry.id is in the input list:
-- Select all contracts whose last active standard installment due date = entry.Date
-- For each found contract:
---- Set LI = last active standard installment
---- Find closest working day (CWD) in the future (that is not present in table Non-working Day)
---- Call 05.200 Perform decoupling use case for all incoming payments paired to LI
---- Cancel LI by setting:
------ LI.Active = 'FALSE'
------ LI.Deactivated In Version = MaxInstallmentVersion = get MV by Maximal Version of Installment Schedule incremented by 1
---- Create a copy of LI and set:
------ LI.Active = 'TRUE'
------ LI.Deactivated In Version = null
------ LI.Recalculation Reason = 'GN'
------ LI.Created In Version = MaxInstallmentVersion
------ LI.Due Date = CWD
------ LI.Customer Due Date = CWD - DaysBeforeDueDate (global parameter)
---- Perform coupling of contract payments by calling of UC 05.180 Perform coupling payment with installment for the contract.
---- Generate system event RegeneratedInstallmentScheduleSE with canceled and created last installment.

## 🔗 Connections (1)

- → Dependency: [[Non-working Day]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1728 (CBL-4595) Change of the last due date
- Use Case: Generate installment schedule
- Use Case: ISGEN Generate installment schedule
