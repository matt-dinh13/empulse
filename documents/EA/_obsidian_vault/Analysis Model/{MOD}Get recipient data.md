---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1878539
diagrams: 4
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Get recipient data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

This rule describes rule for getting bank account and name of recipient used for payment orders as well as showing these data in the outgoing payment grid.

Input parameter:

	
- outgoingPayment

Return values:

	
- recBankAccountNumber - Recipient's bank account number
	
- recBankAccountBankCode - Recipient's bank account bank code
	
- recName - Name of the recipient


	
- targetBankAccountNumber - target (client's) bank account number


	
- targetBankAccountBankCode - target (client's) bank code
	
- salesroomCode
	
- {ADD CBL-1093}externalCardID
	
- truncatedPAN{/ADD}


System determines recipient's data as follow:
Data of recipient is obtained from outgoingPayment.Payment Channel (PC):

	
- recBankAccountNumber = PC.Bank Account Number
	
- recBankAccountBankCode = PC.Bank Code
	
- recName = PC.Recipient Name

If PC.Target Bank Account is not NULL, data of target account is obtained as follow:

	
- targetBankAccountNumber = AccountNumber from Bank Account having ID = PC.Target Bank Account
	
- targetBankAccountBankCode = Bank.Code from Bank related to Bank Branch related to Bank Account having ID = PC.Target Bank Account


	
- {ADD CBL-1093}externalCardID = PC->External Card.External Card ID


	
- truncatedPAN = PC->External Card.Truncated PAN{/ADD}


If no Payment Channel data is found, null values are returned

## 🔗 Connections (5)

- ← Dependency: [[Found payments]]
- ← Usage: [[05.113 Generate Outgoing Payment Order via REST API]]
- → Dependency: [[Requirement3 - Outgoing Payment Orders and Files]]
- ← Dependency: [[{MOD}Generate payment orders from outgoing payments]]
- ← Dependency: [[{MOD}05.110 Generate payment orders]]

## 📊 Appears In (4 diagrams)

- Custom: Browse outgoing payments screen
- Custom: PAYM-1097 (CBL-1093) Loan disbursement to any card
- Logical: OutgoingPaymentRestAPI
- Use Case: Process outgoing payments
