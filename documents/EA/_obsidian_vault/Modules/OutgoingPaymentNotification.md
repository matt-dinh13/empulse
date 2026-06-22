---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model/JMS messages"
domain: "Modules"
element_id: 1687129
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 OutgoingPaymentNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model/JMS messages

## 📝 Notes

{MOD CBL-16385 PAM-459Y2}
Message sent during disbursement confirmation / rejection
Including status history

## 🔗 Connections (5)

- → Dependency: [[OutgoingPaymentEventTypeDto]]
- → Dependency: [[{ADD}ExtendedProperty (Class 1687130)]]
- → Dependency: [[OutgoingPaymentTypeDto (Enumeration 1671301)]]
- ← Dependency: [[{MOD}05.310 Process disbursement confirmations]]
- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - JMS messages
- Logical: RabbitMQ messages - OutgoingPaymentNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | long |  |
| loanCode | string |  |
| eventType | OutgoingPaymentEventTypeDto |  |
| orderCreationDate | dateTime |  |
| paidAmount | MoneyDto |  |
| paymentCode | string |  |
| paymentChannelType | DisbursementChannelType |  |
| paymentType | OutgoingPaymentTypeDto |  |
| deliveryConfirmationDate | date |  |
| paymentStatusHistory | string |  |
| {ADD}outgoingPaymentExtendedProperty | {ADD}ExtendedProperty |  |
| {ADD}eventDate | dateTime |  |
