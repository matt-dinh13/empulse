---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Generated messages/Contract Service Notifications"
domain: "Modules"
element_id: 1823907
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 RelatedTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Interface Provided/Generated messages/Contract Service Notifications

## 📝 Notes

A related transaction supplement structure

Source: If Contract Service.Transaction Supplement Id is not NULL,

	
- call GET.../transaction-supplement/{Contract Service.Transaction Supplement Id}
	
- returned TransactionSupplement data is filtered only for TransactionSupplement.salesQuotes.transactions by salesQuotes.serviceExternalId = loanServiceId and having Status = CONFIRMED
	
- If no such Transaction exists, the structure is not filled in.

## 🔗 Connections (1)

- ← Dependency: [[ContractServiceNotification]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Card Service Notifications
- Logical: Contract Service Notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanCode | string |  |
| sourceTrxId | string |  |
