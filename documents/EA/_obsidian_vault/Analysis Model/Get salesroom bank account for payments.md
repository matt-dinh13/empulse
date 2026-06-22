---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827647
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Get salesroom bank account for payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system gets the data of the bank account (used for payments) associated with the specific salesroom.

Input:
- SalesroomCode = code of the salesroom

Output:
- SalesroomBankAccount [0..1] = object of the respective salesroom bank account (used for payments)
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the SalesroomCode from the input and gets the data of the bank account associated wit the corresponding salesroom by calling the respective REST API provided by the Payments module (i.e. GET GetValidRecipientBankAccountRequest) with following input parameters:
   - salesroomCode = SalesroomCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetValidRecipientBankAccountResponse and proceeds based on the returned data accordingly - in case no bank account data are returned for the requested salesroom, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received SalesroomBankAccount (GetValidRecipientBankAccountResponse.*) from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (5)

- ← Dependency: [[AccountType]]
- ← Dependency: [[AccountType]]
- ← Dependency: [[AccountType]]
- ← Dependency: [[AccountType]]
- ← Dependency: [[PaymentChannel (Class 1821431)]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
