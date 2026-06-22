---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v1/ISIR"
domain: "Analysis Model"
element_id: 1833359
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v1/ISIR

## 📝 Notes

It notifies external systems/components about creation or cancellation of contract installments.

LDM souce:
Contract.Installment

## 🔗 Connections (6)

- ← Dependency: [[{ADD}WriteOffNotificationDto]]
- ← Dependency: [[InstallmentScheduleInfoRequest (Class 1758075)]]
- → Dependency: [[RecalculationReasonTypeDto (Enumeration 1833360)]]
- → Dependency: [[InstallmentTypeDto (Enumeration 1833358)]]
- → Dependency: [[InstallmentPartDto (Class 1833357)]]
- → Dependency: [[InstallmentOperationTypeDto (Enumeration 1833356)]]

## 📊 Appears In (2 diagrams)

- Logical: Generated messages - Installment Schedule Info Request
- Logical: Generated messages - WriteOffNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentParts | InstallmentPartDto |  |
| installmentType | InstallmentTypeDto |  |
| recalculationReason | RecalculationReasonTypeDto |  |
| typeOfOperation | InstallmentOperationTypeDto |  |
| dueDate | date |  |
| installmentNumber | number |  |
| createdInVersion | number |  |
| deactivatedInVersion | number |  |
| {ADD}previousDueDate | date |  |
