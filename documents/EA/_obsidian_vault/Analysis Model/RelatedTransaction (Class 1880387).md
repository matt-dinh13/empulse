---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification"
domain: "Analysis Model"
element_id: 1880387
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 RelatedTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract Service notification

## 📝 Notes

A related transaction supplement structure

Source: If Contract Service.Transaction Supplement Id is not NULL,

	
- call GET.../transaction-supplement/{Contract Service.Transaction Supplement Id}
	
- returned TransactionSupplement data is filtered only for TransactionSupplement.salesQuotes.transactions by salesQuotes.serviceExternalId = loanServiceId and having Status = CONFIRMED
	
- If no such Transaction exists, the structure is not filled in.

## 🔗 Connections (1)

- ← Dependency: [[ContractServiceNotification (Class 1880390)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Service notification
- Logical: Contract Service Notification v5

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanCode | string |  |
| sourceTrxId | string |  |
