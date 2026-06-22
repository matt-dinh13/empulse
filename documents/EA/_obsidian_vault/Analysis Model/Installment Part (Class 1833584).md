---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2"
domain: "Analysis Model"
element_id: 1833584
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Installment Part

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2

## 📝 Notes

It contains data of installment parts related to an installment

LDM souce:
Installment->InstallmentPart

## 🔗 Connections (2)

- → Dependency: [[Installment Part Type (Enumeration 1833588)]]
- ← Dependency: [[Installment (Class 1833589)]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule Info Request v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paidAmount | number |  |
| amount | number |  |
| dataExchangeId | string |  |
| partType | installmentPartType |  |
| tariffItemTypeCode | sring |  |
