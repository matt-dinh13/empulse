---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2"
domain: "Analysis Model"
element_id: 1833586
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Installment Schedule Info Request 

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2

## 📝 Notes

{ADD}PAYM-5092{/ADD}
v2

Information about (re-)generation of installment schedule for CEL. 

{ADD IS-2290} Contract status info added to header of the message.{/ADD}

LDM source:
a list of Installments which was created / canceled within (re-)generation of the installment schedule

## 🔗 Connections (2)

- → Dependency: [[Payment Pairing Info]]
- → Dependency: [[Installment (Class 1833589)]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule Info Request v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creationDate | date |  |
| contractCode | string |  |
| contractStatus | contractStatusType |  |
| installments | installment |  |
| paymentsPairing | paymentPairingInfo |  |
| currency | string |  |
