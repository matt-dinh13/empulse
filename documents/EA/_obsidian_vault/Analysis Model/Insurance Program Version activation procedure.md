---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Business Rules"
domain: "Analysis Model"
element_id: 1501357
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance Program Version activation procedure

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Business Rules

## 📝 Notes

Procedure of activation of versioned object.
Input: 
- Type of versioned Entity (INSURANCE_PROGRAM).
- Code of particular Instance of Entity .
- Version of particular Instance of Entity in status Inactive.

Confirmation dialog (MSG_ACTIVATE_VERSION_1) is displayed with following options:

1) Activate now 

	
- If exists another version of the same Instance of Entity in status  Active, system sets the status of this version to Terminated and Version Termination date to current date and time
	
- System sets the status of selected version of Instance of Entity to Active and Version Activation date to current date and time.


2) Activate later 

	
- System displays form for entering of Activation date.
	
- If user enters correct activation date (Planned version activation date+time) then

-- If already exists another version of the same Instance of Entity in status For Activation a confirmation dialog is displayed (MSG_ACTIVATE_VERSION_2). If continuation is not confirmed , procedure ends.
-- Else system sets the status of selected version of Instance of Entity to For Activation and saves InstanceOfEntity.PlannedActivationDate.

3) Cancel 

	
- procedure ends.

## 🔗 Connections (1)

- ← Dependency: [[08.580 Activate Insurance Program version manually (UseCase 1517629)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules for Insurance Program Versioned Entity
- Use Case: Manage Insurance Program
