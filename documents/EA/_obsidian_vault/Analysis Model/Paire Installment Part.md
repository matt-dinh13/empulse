---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2"
domain: "Analysis Model"
element_id: 1833583
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Paire Installment Part

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2

## 📝 Notes

This object represents information about paring or unpairing an incoming payment on installment part. 
LDM source:
IncomingPaymentPairing->InstallmentPart.dataExchangeID for affected (passed) IncomingPaymentPairing

## 🔗 Connections (2)

- ← Dependency: [[Payment Pairing Info]]
- → Dependency: [[Installment Part Type (Enumeration 1833588)]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule Info Request v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDate | date |  |
| installmentPartDataExchangeID | string |  |
| installmentPartType | installemntPartType |  |
| pairedAmount | number |  |
| tarifItemTypeCode | string |  |
