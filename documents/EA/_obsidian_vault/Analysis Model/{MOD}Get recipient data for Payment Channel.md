---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1798272
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Get recipient data for Payment Channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

This rule describes how to obtain some attributes of the recipient bank account to store on Contract.Payment Channel. This rule is used for all Purposes except RE (Repayment) The obtained data is used for searching outgoing payments to improve performance of this function.

Input:

	
- Payment Channel.Type
	
- SalesroomID (optional)
	
- BankAccountID (optional)


Output:

	
- RecipientName
	
- BankAccountID
	
- BankAccountNumber
	
- BankCode


Steps:
Case Payment Channel.Type
Case SBA, PBA and SalesroomID is provided

	
- If exists valid Bank Account assigned to Salesroom and marked For Payments
- get ID of the found Bank Account (i.e BankAccountID = Bank Account ID of {ADD CBL-3607 PAYM-1428}Salesroom 2{/ADD} Bank Account having Salesroom ID = SalesroomID  and For Payments = 1)
- get Recipient Name from Salesroom.Name related to the Contract (i.e. RecipientName = Salesroom.Name from Salesroom where Salesroom ID = SalesroomID)
- get Bank Account Number from Salesroom Bank Account (i.e. BankAccountNumber  = Account Number from Bank Account having ID = BankAccountID)
- get Bank Code from Salesroom Bank Account (i.e. BankCode = Bank Code of Bank related to Bank Branch related to Bank Account having ID = BankAccountID)
	
- If no valid Bank Account assigned to Salesroom is found, get following data from Salesroom Partner and its Bank Account marked For Payments
- get ID of the found Bank Account (i.e BankAccountID = Bank Account ID of {ADD CBL-3607 PAYM-1428}Partner 2{/ADD} Bank Account associated with Partner having Salesroom ID = SalesroomID  and {ADD CBL-3607 PAYM-1428}Partner2BankAccount.{/ADD}ForPayments = 1)
- get Recipient Name from Partner.Name related to the Contract (i.e. RecipientName = Partner.Name related to Salesroom where Salesroom ID = SalesroomID)
- get Bank Account Number from Partner Bank Account (i.e. BankAccountNumber = Account Number from Bank Account having ID = BankAccountID)
- get Bank Code from Partner Bank Account (i.e. BankCode = Bank Code of Bank related to Bank Branch related to Bank Account having ID = BankAccountID)


Case GBA and BankAccountID is provided

	
- get Recipient Name from Client Snapshot related to the Contract (i.e. RecipientName = ClientSnapshot.FullName related to Contract of Payment Channel)
get Bank Account Number from Client Bank Account (i.e. BankAccountNumber = Account Number from Bank Account having ID = BankAccountID)
get Bank Code from Client Bank Account (i.e. BankCode = Bank Code of Bank related to Bank Branch related to Bank Account having ID = BankAccountID)


{ADD PAYM-5301}
Case RTA  and BankAccountID is provided

	
- get Recipient Name from from Bank Account (i.e. RecipientName = Holder Name from Bank Account having ID = BankAccountID)
get Bank Account Number from Bank Account (i.e. BankAccountNumber = Account Number from Bank Account having ID = BankAccountID)
get Bank Code from  Bank Account (i.e. BankCode = Bank Code of Bank related to Bank Branch related to Bank Account having ID = BankAccountID)

{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Saving of Payment Channels]]
- ← Dependency: [[{MOD}Update recipient bank data for outgoing payments]]

## 📊 Appears In (2 diagrams)

- Use Case: Generate and Cancel outgoing payments
- Use Case: Process outgoing payments
