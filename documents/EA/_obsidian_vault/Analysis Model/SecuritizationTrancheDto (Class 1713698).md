---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization"
domain: "Analysis Model"
element_id: 1713698
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizationTrancheDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization

## 📝 Notes

A structure of the tranche (batch for processing of contracts for securitization)

## 🔗 Connections (4)

- ← Dependency: [[{DEL}ContractSecuritizationNotification]]
- → Dependency: [[SecuritizationTrancheStatusTypeDto]]
- → Dependency: [[CreditOwnerDto]]
- → Dependency: [[SecuritizedContractDto (Class 1713694)]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Contract Securitization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| trancheName | string |  |
| saleDate | date |  |
| investor | CreditOwnerDto |  |
| processingStatus | SecuritizationTrancheStatusTypeDto |  |
| contracts | SecuritizedContractDto |  |
