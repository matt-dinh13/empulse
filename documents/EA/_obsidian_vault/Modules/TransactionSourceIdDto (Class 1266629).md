---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/JMS messages"
domain: "Modules"
element_id: 1266629
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 TransactionSourceIdDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/JMS messages

## 📝 Notes

Transaction identification in the source system where the card transaction was originated.

## 🔗 Connections (3)

- ← Dependency «use»: [[PaidInstallmentMessageDto]]
- ← Dependency: [[TransactionMessageDto (Class 1347890)]]
- ← Dependency: [[TransactionMessageDto (Class 1347890)]]

## 📊 Appears In (2 diagrams)

- Logical: REL Account Transactions - JMS messages
- Logical: REL Payment Pairing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceSystem | SourceSystemEnumDto |  |
| sourceTxId | TransactionSourceCodeType |  |
