---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process"
domain: "Requirements Model"
element_id: 1834351
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-16689 BNPL Cancellation - API/Process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process

## 📝 Notes

Goal the requirement is creation of a new method to modify, or possibly cancel already processed TransactionSupplement.

TransactionSupplement (cancel/update) functionality has to decide what variant of the original transaction modification will performed.

The cancellation request has to be validated for correctness (cancelled amount, supplement in correct status existence,...)

Variant #1 - amount of the transaction asked for cancellation is equal to the original TransactionSupplement amount:

	
- a cancel transaction request on whole amount is created and sent to the AM
	
- the original AccountTransaction record related to the TransactionSupplement is cancelled
	
- all the original TransactionSupplement is cancelled
	
- A TransactionSupplement notification is generated ((TransactionSupplementCancelled ?)


Variant #2 - amount of the transaction asked for cancellation is lower than the original TransactionSupplement amount:

	
- a cancel transaction request on the amount is created and sent to the AM
	
- the original AccountTransaction record related to the TransactionSupplement is cancelled
	
- a new AccountTransaction record with amount = the original transaction amount - the cancelled transaction amount related to the TransactionSupplement is created
	
- a new confirm transaction request is created and sent to the AM
	
- A TransactionSupplement notification is generated (TransactionSupplementChanged?)
	
- Other cases of the TransactionSupplement won't be considered - such request is refused


Supposed input data of the cancel/update method:

	
- SupplementId
	
- Total amount to be cancelled (Refund Amount) 
	
- Message (Cancellation reason) - should be pre-defined code (from Contract Supplement Status Reason)
	
- Customer cancellation date 
	
- CancellationId (generated from partner) 


Some of the new cancellation items from input should be stored in the Transaction Supplement domain. 

Manual transaction cancellation via UI - this action won't be supported via the BSL Contract detail - Supplement tab.

## 🔗 Connections (3)

- ← Generalization: [[CSI-1574 - Change Contract Supplement and Account Transaction relationship]]
- ← Generalization: [[CSI-1649 Update ConfirmTransactionWithIPConversion call with original transaction reference]]
- ← Generalization: [[CSI-1580 Create API method for Transaction Supplement update]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16689 (CSI-1531) BNPL Cancellation - API/Process
