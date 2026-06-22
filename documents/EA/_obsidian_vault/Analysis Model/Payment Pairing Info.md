---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2"
domain: "Analysis Model"
element_id: 1833590
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Payment Pairing Info

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment Schedule Info Request/v2

## 📝 Notes

Notification about pairing or unpairing of incoming payments.
LDM source:

	
- IncomingPayment
	
- a list of IncomingPaymentPairings
	
- type of the operation (PAIR, UNPAIR)

## 🔗 Connections (2)

- ← Dependency: [[Installment Schedule Info Request (Class 1833586)]]
- → Dependency: [[Paire Installment Part]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule Info Request v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| unpairingDate | date |  |
| typeOfOperation | PaymentPairingOperationType |  |
| paymentType | paymentType |  |
| paymentSourceSystem | incomingPaymentSourceSystem |  |
| paymentChannel | string |  |
| paymentDate | date |  |
| paymentDataExchangeID | string |  |
| pairingDate | date |  |
| pairedInstallmentParts | pairedInstallmentPart |  |
| {ADD}transactionNumber | string |  |
