---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Business Rules"
domain: "Analysis Model"
element_id: 1501355
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance Program Automatic Version activation processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Business Rules

## 📝 Notes

Automatic activation of versioned object.
Input: Type of versioned Entity 
(INSURANCE_PROGRAM).

Procedure:
1. For each version of Instance of Entity 
- in status 'ForActivation' 
- where planned activation date <= current date (the Day fraction is compared, time is ignored)
1.1 System checks activation rules for corresponding Entity type:
-- INSURANCE_PROGRAM: Insurance Program activation validation rules. 
If any error/warning is detected, it is not displayed but sent to message box of the user who sets the Entity version to status ForActivation. 
Format of message is 'Activation of <Entity> version <Entity code>/<Entity version number> warning/error: <validation message>.'.
Example: Activation of INSURANCE PROGRAM version CLX-012/2 warning/error: No eligibility criteria assigned to program.
1.2 If an error is detected
1.2.1 Status of Instance of Entity version is set to Inactive.
1.2.2 System continues with next version of Instance of Entity
1.3 Else
1.3.1  If exists another version of the same Instance of Entity in status  Active, system sets the status of this version to Terminated and Version Termination date to current date and time.
1.3.2  System sets the status of selected version of Instance of Entity to Active and Version Activation date to current date and time.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Insurance Program activation validation rules]]
- ← Dependency: [[08.590 Activate Insurance Program version automatically (UseCase 1517633)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules for Insurance Program Versioned Entity
- Use Case: Manage Insurance Program
