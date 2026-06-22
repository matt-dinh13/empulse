---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification"
domain: "Requirements Model"
element_id: 1878889
diagrams: 5
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Set contract Condition Accepted

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification

## 📝 Notes

This rule describes set of steps performed in case acceptation of the loan conditions from client's side.

Input:

	
- Contract


Steps:

	
- System confirms goods hand over/disbursement for the contract (i.e. set Contract.ConditionsAccepted = ACCEPTED)
	
- If enableSAIWithInstallments = TRUE and Contract.ConditionsAccepted = ACCEPTED then scenario ends.
	
- System creates a BusinessEvent according to the Create business event rule with the following parameters:
- Contract = Contract
- BusinessEventType = CONDITIONS_ACCEPTED
- ModificationBy = user account for the system which sent the message
- TimeOfModification = current date and time
- list of attributes = NULL
	
- System generates a system event ConditionAcceptedSE with processed contract as parameter (needed for generation of ContractFullInfo notification){/ADD}

## 🔗 Connections (4)

- ← Dependency: [[{MOD}05.310 Process disbursement confirmations]]
- ← Dependency: [[{MOD}05.350 Process disbursement confirmation message]]
- ← Dependency: [[{ADD}Set condition accepted for SAI contract on related Cash Loan disbursement]]
- ← Dependency: [[{MOD}Sign contract finalization]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
- Custom: CLM-3817 - New SAI - Contract signing
- Custom: CLM-3822 - New SAI - COP processing
- Custom: CLM-6205 Condition accepted for related SAI contract
- Custom: Common Business Rules for Contract Management
