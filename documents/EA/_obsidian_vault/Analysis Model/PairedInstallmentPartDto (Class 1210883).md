---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1210883
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairedInstallmentPartDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

This object represents information about paring or unpairing an incoming payment on installment part. 


LDM source:
IncomingPaymentPairing->InstallmentPart.dataExchangeID for affected (passed) IncomingPaymentPairing

## 🔗 Connections (2)

- → Dependency: [[MoneyDto (Class 1210890)]]
- ← Dependency: [[PaymentPairingInfoDto (Class 1629661)]]

## 📊 Appears In (2 diagrams)

- Logical: Generated JMS messages - Incoming payments pairing
- Logical: Generated messages - Installment Schedule Info Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPartDataExchangeID | string |  |
| pairedAmount | MoneyDto |  |
| installmentPartType | InstallmentPartType |  |
| tarifItemType | MoneyDto |  |
| dueDate | Date |  |
