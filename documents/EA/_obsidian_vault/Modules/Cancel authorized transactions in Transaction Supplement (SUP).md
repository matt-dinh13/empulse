---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870141
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Cancel authorized transactions in Transaction Supplement (SUP)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule described set of steps for processing failed authorization event

Input:

	
- ContractSupplement
	
- AccountTransaction(s) = take only Account Transactions where Account Transaction.Status = 'AUTHORIZED'  -- already authorized transactions



	
- System calls AM POST ../accounts/{accountNumber}/authorizations/cancel with parameters
- sourceTransactionIds -- array of transactions are to be cancelled
--- [sourceSystem = ContractSupplement.Request Source.Source System] for each AccountTransaction from the input
--- [sourceTxId = AccountTransaction(s) -> Account Transaction.Data_Exchange_Id] for each AccountTransaction from the input
- cancellationReason = 'REVERSAL'
	
- System evaluates the CancelTransactionResponse
if resultCode = ERROR, system logs the error and it is continued with next step  -- a request for cancel authorization failed in AM, nevertheless whole business case will be canceled anyway
if HTTP 204 is returned, it is continued with next step -- all is OK
	
- For each Account Transaction in AccountTransaction(s), system -- all Account Transactions in any status except CANCELLED related to the Transaction Supplement are canceled
- sets Account Transaction.Status = CANCELLED and Transaction Status Transition.Status = CANCELLED
	
- Return to the calling Use case

## 🔗 Connections (2)

- ← Usage: [[{ADD}13.025 Authorize transactions in Contract Supplement (UseCase 1874100)]]
- ← Dependency: [[{ADD}13.057 Process Contract Supplement Cancelled event]]

## 📊 Appears In (2 diagrams)

- Use Case: Authorize Contract Supplement Transactions - Use Case Model
- Use Case: Cancel Contract Supplement - Use case model
