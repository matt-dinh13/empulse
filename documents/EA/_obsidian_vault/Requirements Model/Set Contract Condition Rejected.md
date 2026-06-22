---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification"
domain: "Requirements Model"
element_id: 1878884
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Set Contract Condition Rejected

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification

## 📝 Notes

This rule describes set of steps performed in case rejection of the loan conditions from client's side.

Input:

	
- Contract


Steps:
If Contract.Status is Signed and Contract.ConditionsAccepted in (N (NO_INFORMATION), or A (ACCEPTED)), then system
- set Contract.Conditions Accepted = R (REJECTED)
- creates a BusinessEvent according to the rule Create business event with the following parameters:
--- Contract = processed Contract
--- BusinessEventType = CONDITIONS_REJECTED
--- ModificationBy = user logged
--- TimeOfModification = current date & time
--- list of attributes = null
- {ADD CLM-1871} System generates a system event ConditionRejectedSE with processed contract as parameter (needed for generation of ContractFullInfo notification){/ADD}

## 🔗 Connections (3)

- ← Dependency: [[08.925 Cancel expired loan service requests]]
- ← Dependency: [[{MOD}05.310 Process disbursement confirmations]]
- ← Dependency: [[{MOD}05.350 Process disbursement confirmation message]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
- Use Case: Cancellation of expired loan service requests
