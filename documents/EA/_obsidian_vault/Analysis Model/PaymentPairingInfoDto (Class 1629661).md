---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments"
domain: "Analysis Model"
element_id: 1629661
diagrams: 2
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 PaymentPairingInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Incoming Payments

## 📝 Notes

Notification about pairing or unpairing of incoming payments.

{MOD IAKZ-504}Renamed from PaymentPairingRequest{/MOD}

LDM source:

	
- IncomingPayment
	
- a list of IncomingPaymentPairings
	
- type of the operation (PAIR, UNPAIR)

## 🔗 Connections (6)

- → NoteLink: [[External Reference (Boundary 1629664)]]
- → Dependency: [[PaymentPairingOperationTypeDto (Enumeration 1210887)]]
- → Dependency: [[PaymentTypeDto (Enumeration 1210884)]]
- → Dependency: [[IncomingPaymentSourceSystemDto (Enumeration 1440426)]]
- → Dependency: [[PairedInstallmentPartDto (Class 1210883)]]
- ← Dependency: [[InstallmentScheduleInfoRequest (Class 1758075)]]

## 📊 Appears In (2 diagrams)

- Logical: Generated JMS messages - Incoming payments pairing
- Logical: Generated messages - Installment Schedule Info Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentDataExchangeID | string |  |
| paymentSourceSystem | IncomingPaymentSourceSystemDto |  |
| pairedInstallmentParts | PairedInstallmentPartDto |  |
| paymentDate | Date |  |
| typeOfOperation | PaymentPairingOperationTypeDto |  |
| pairingDate | Date |  |
| unpairingDate | Date |  |
| paymentChannel | string |  |
| paymentType | PaymentTypeDto |  |
