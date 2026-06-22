---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14151 (CLM-4863) - Migrate to AccountManagementWS v6"
domain: "Requirements Model"
element_id: 1835782
diagrams: 6
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Creation of contract cancellation request - automatic cancel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14151 (CLM-4863) - Migrate to AccountManagementWS v6

## 📝 Notes

This rule describes what is done when a REL contract having account number is requested to be canceled automatically.

Inputs:

	
- contract
	
- cancellationReason


Steps:

	
- System calls AccountManagementWS (v6).CancelAccount with CancelAccountRequest
- .cancelItems.accountNumber = Contract.Account_number.
If an error or timeout occurs in the communication:
- the error is logged into the system,
- algorithm ends.
If a response is obtained, system continues with the next step.
	
- System creates a record in Contract_Status_Transition_Request_for_Cancellation with:
- Type = 'CANCELLATION',
- Status = 'SENT',
- Requested_by = 'system',
- Requested_date = 'current date and time',
- Reason = cancellationReason from the input,
and links it to the contract.
	
- Algorithm ends.

## 🔗 Connections (5)

- → Dependency «invoke»: [[AccountManagementWS]]
- → Usage: [[CaBus-AM]]
- ← Dependency: [[01.332 Cancel signed contract service (UseCase 1850503)]]
- ← Dependency: [[01.333 Cancel active contract service]]
- ← Dependency: [[01.445 Cancel undisbursed contract (UseCase 1850500)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-14151 (CLM-4863) - Migrate to AccountManagementWS v6
- Custom: Common for contract cancellation
- Logical: AccountManagementWS - Contract cancellation
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract on external request
