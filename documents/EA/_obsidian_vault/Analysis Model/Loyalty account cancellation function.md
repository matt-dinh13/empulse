---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Business rules"
domain: "Analysis Model"
element_id: 1835778
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Loyalty account cancellation function

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Business rules

## 📝 Notes

This rule describes what is done when a REL contract having account number is requested to be canceled manually.

Inputs:

	
- Contract


Pre-condition:

	
- The Contract has an uncancelled loyalty service arranged (i.e. Contract->Contract Service[where Status <> Cancelled]->Loyalty Service exists within the contract)


Steps:

	
- System calls LoyaltyManagementWS.cancelAccount()  with CancelAccountRequest filled according to the rule Mapping CancelAccountRequest - LoyaltyManagementWS 
If an error (e.g. SOAP fault is obtained) or timeout occurs in the communication:
- the error is logged into the system
- if the functionality is used from GUI use case, the system shows an error message (MSG_CallingLoyaltyFailed; e.g. "An error occurred during calling the loyalty system. The action cannot be done.")
- the calling UC ends.

	
- System cancels loyalty account service arranged to the passed contract.

## 🔗 Connections (4)

- ← Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- ← Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- ← Dependency: [[01.445 Cancel undisbursed contract (UseCase 1850500)]]

## 📊 Appears In (4 diagrams)

- Custom: Common for contract cancellation
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract manually
