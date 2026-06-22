---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1758075
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentScheduleInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

{MOD IAKZ-504}Renamed from CELInstallmentScheduleRequest{/MOD}

Information about (re-)generation of installment schedule for CEL. 

LDM source:
a list of Installments which was created / canceled within (re-)generation of the installment schedule

## 🔗 Connections (3)

- → Dependency: [[PaymentPairingInfoDto (Class 1629661)]]
- → Dependency: [[External Reference (Boundary 1758096)]]
- → Dependency: [[InstallmentDto (Class 1833359)]]

## 📊 Appears In (2 diagrams)

- Logical: Generated JMS messages - Incoming payments pairing
- Logical: Generated messages - Installment Schedule Info Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| contractStatus | External Reference |  |
| installments | InstallmentDto |  |
| paymentPairings | PaymentPairingInfoDto |  |
| {ADD}creationDate | date |  |
