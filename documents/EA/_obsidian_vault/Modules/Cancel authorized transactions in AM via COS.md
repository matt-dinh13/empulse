---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1868221
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Cancel authorized transactions in AM via COS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule described set of steps for cancellation of the authorized transactions in the AM. More than one authorization can be processed by API.

Input:

	
- Contract
	
- AccountTransaction(s) -- only Account Transactions where Account Transaction.Status = 'AUTHORIZED', or 'SENT_TO_AUTHORIZATION'


	
- System calls AM POST ../accounts/{Contract.Credit Account Number}/authorizations/cancel with parameters
- sourceTransactionIds -- array of transactions are to be cancelled
--- [sourceSystem = 'COS'] for each AccountTransaction from the input
--- [sourceTxId = Account Transaction.Data_Exchange_Id] for each AccountTransaction from the input
- cancellationReason = 'MANUAL'
	
- System evaluates the call response
if an error is returned, system logs the error and it is continued with next step  -- a request for cancel authorization failed in AM, nevertheless whole business case will be canceled anyway
if HTTP 204 is returned, it is continued with next step -- all is OK
	
- For each Account Transaction in AccountTransaction(s), system -- all processed Account Transactions in any status except CANCELLED related to the Transaction Supplement are canceled
- sets Account Transaction.Status = CANCELLED and Transaction Status Transition.Status = CANCELLED
	
- Return to the calling Use case

## 🔗 Connections (1)

- ← Dependency: [[08.050 Cancel Loan Service method (COS) (UseCase 1876278)]]

## 📊 Appears In (2 diagrams)

- Use Case: Cancel Loan Service - Use Case Model
- Use Case: CSI-2975 COS - Cancel Service on Contract
