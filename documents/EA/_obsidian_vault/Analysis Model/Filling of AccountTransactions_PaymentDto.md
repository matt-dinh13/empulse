---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Mapping to external systems/Payment card system/Account Transactions/Business rules"
domain: "Analysis Model"
element_id: 912041
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Filling of AccountTransactions:PaymentDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Mapping to external systems/Payment card system/Account Transactions/Business rules

## 📝 Notes

Input:

	
- IncomingPayment


Filling of PaymentDto:

	
- sourceTransactionId .source = IncomingPayment.dataExchangeId
	
- sourceTransactionId .sourceSystem = IncomingPayment.sourceSystem


	
- amount = IncomingPayment.amount
	
- depositDate = IncomingPayment.chargingDate
	
- transactionDate =  IncomingPayment.depositeDate
	
- paymentChannel = IncomingPayment.paymentChannel
	
- paymentType = IncomingPayment.paymentType
	
- attributes.stringAtrribute.value= IncomingPayment.description (if this value exists)
	
- attributes.stringAtrribute.key="DESCRIPTION" of record in previous step (if record exists)

## 📊 Appears In (1 diagrams)

- Custom: Account Transactions - Mapping rules
