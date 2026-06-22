---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14151 (CLM-4863) - Migrate to AccountManagementWS v6"
domain: "Requirements Model"
element_id: 1835779
diagrams: 5
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Creation of contract cancellation request - manual cancel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14151 (CLM-4863) - Migrate to AccountManagementWS v6

## 📝 Notes

This rule describes what is done when a REL contract having account number is requested to be canceled manually.

Inputs:

	
- contract


Steps:

	
- System creates a record in Contract_Status_Transition_Request_for_Cancellation with:
- Type = 'CANCELLATION',
- Status = 'SENT',
- Requested_by = 'current user',
- Requested_date = 'current date and time',
- Reason = Reason for cancellation,
- Note = Notice,
and links it to the contract.
	
- System calls AccountManagementWS (v6).CancelAccount with CancelAccountRequest
- cancelItems.accountNumber = Contract.Account_number.
If an error or timeout occurs in the communication:
- the error is logged into the system,
- the system shows an error message (MSG_CABUS_UNAVAILABLE; e.g. Revolving card system is unavailable. The action cannot be done.).
- algorithm ends.
If a response is obtained, system continues with the next step.
	
- System displays a message informing the user that the request is in processing (MSG_REL_ContractCancel).
	
- Algorithm ends.

## 🔗 Connections (7)

- → Usage: [[CaBus-AM]]
- → Dependency «invoke»: [[AccountManagementWS]]
- ← Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- ← Dependency: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- ← Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- ← Dependency: [[01.097 Cancel application externally]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-14151 (CLM-4863) - Migrate to AccountManagementWS v6
- Custom: Common for contract cancellation
- Logical: AccountManagementWS - Contract cancellation
- Use Case: Cancel contract after sign
- Use Case: Cancel contract manually
