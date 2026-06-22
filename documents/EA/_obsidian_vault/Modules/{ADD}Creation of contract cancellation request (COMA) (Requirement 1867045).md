---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Business Rules"
domain: "Modules"
element_id: 1867045
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Creation of contract cancellation request (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Business Rules

## 📝 Notes

{ADD CLM-6038/}
This rule describes what is done when a REL contract having account number is requested to be canceled by API.

Inputs:

	
- contract
	
- cancellationReason


Steps:

	
- System calls AccountManagementWS (v6).CancelAccount with CancelAccountRequest
- .cancelItems.accountNumber = Contract.Account_number.
If an error or timeout occurs in the communication then error is returned to calling UC and rule ends.
	
- System creates a record in Contract_Status_Transition_Request_for_Cancellation with:
- Type = 'CANCELLATION',
- Status = 'SENT',
- Requested_by = logged user,
- Requested_date = 'current date and time',
- Reason = cancellationReason from the input,
and links it to the contract.
	
- Rule ends.

## 🔗 Connections (1)

- ← Usage: [[{ADD}Contract cancel via API (UseCase 1869937)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Contract cancellation
