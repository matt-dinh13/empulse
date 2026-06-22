---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode"
domain: "Requirements Model"
element_id: 1878826
diagrams: 5
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Cancel authorized transactions in Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode

## 📝 Notes

This rule described set of steps for processing failed authorization event

Input:

	
- ContractSupplement
	
- AccountTransaction(s) = take only Account Transactions where Account Transaction.Status = 'AUTHORIZED'  -- already authorized transactions



	
- System calls AM POST ../accounts/{accountNumber}/authorizations/cancel with parameters
- sourceTransactionIds -- array of transactions are to be cancelled
--- [sourceSystem = ContractSupplement.Request Source.Source System] for each AccountTransaction from the input
--- [sourceTxId = ContractSupplement -> Account Transaction.Data_Exchange_Id] for each AccountTransaction from the input
- cancellationReason = 'REVERSAL'
	
- System evaluates the CancelTransactionResponse
if resultCode = ERROR, system logs the error and it is continued with next step  -- a request for cancel authorization failed in AM, nevertheless whole business case will be canceled anyway
if HTTP 204 is returned, it is continued with next step -- all is OK
	
- For each Account Transaction in AccountTransaction(s), system -- all Account Transactions in any status except CANCELLED related to the Transaction Supplement are canceled
- sets Account Transaction.Status = CANCELLED and Transaction Status Transition.Status = CANCELLED
	
- Return to the calling Use case

## 🔗 Connections (4)

- ← Dependency: [[13.361 Cancel contract supplement automatically]]
- ← Dependency: [[13.108 Accept Transaction Supplement documents]]
- ← Dependency: [[13.104 Cancel Transaction Supplement service]]
- ← Dependency: [[13.118 Authorize transactions in Transaction Supplement (UseCase 1881427)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Use Case: Cancel contract supplement automatically
- Use Case: Transaction Supplement authorization method
- Use Case: Transaction Supplement documents - Use case model 
- Use Case: Transaction Supplements management services - Use case model
