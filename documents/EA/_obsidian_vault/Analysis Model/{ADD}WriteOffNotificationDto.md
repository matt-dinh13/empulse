---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Write Off Notification"
domain: "Analysis Model"
element_id: 1758064
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}WriteOffNotificationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Write Off Notification

## 🔗 Connections (4)

- → Dependency: [[{ADD}WriteOffTypeDto]]
- → Generalization: [[MessageBaseTypeDto]]
- → Dependency: [[InstallmentDto (Class 1833359)]]
- ← Dependency: [[Process ContractWrittenOff event notification]]

## 📊 Appears In (1 diagrams)

- Logical: Generated messages - WriteOffNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| contractWriteOffDate | date |  |
| writeOffType | WriteOffTypeDto |  |
| installment | InstallmentDto |  |
