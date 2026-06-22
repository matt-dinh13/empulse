---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model"
domain: "Modules"
element_id: 1877159
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Filling of AccountTransactions:PaymentDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/UseCase Model

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

- Use Case: Cancel incoming payment
