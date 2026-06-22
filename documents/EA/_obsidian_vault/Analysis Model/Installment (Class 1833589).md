---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2"
domain: "Analysis Model"
element_id: 1833589
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2

## 📝 Notes

It notifies external systems/components about creation or cancellation of contract installments.

LDM souce:
Contract.Installment

## 🔗 Connections (5)

- → Dependency: [[Recalculation Reason Type]]
- → Dependency: [[Installment Type (Enumeration 1833591)]]
- → Dependency: [[Installment Operation Type]]
- ← Dependency: [[Installment Schedule Info Request (Class 1833586)]]
- → Dependency: [[Installment Part (Class 1833584)]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule Info Request v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| typeOfOperation | InstallmentOperationType |  |
| recalculationReason | RecalculationReasonType |  |
| installmentType | InstallmentType |  |
| installmentParts | InstallmentPart |  |
| installmentNumber | number |  |
| dueDate | date |  |
| deactivatedInVersion | number |  |
| createdInVersion | number |  |
| previousDueDate | date |  |
