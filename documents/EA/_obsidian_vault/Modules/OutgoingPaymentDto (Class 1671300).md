---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1671300
diagrams: 2
connections: 7
tags:
  - class
  - modules
---

# 🔷 OutgoingPaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

This message is a request to banking system to realize payment order to the bank account of client or partner held in some other bank.

## 🔗 Connections (7)

- ← Association: [[PaymentOrderRequest (Class 1602950)]]
- ← Dependency: [[CancelOutgoingPaymentRequest]]
- → Dependency: [[OutgoingPaymentChannelDto (Enumeration 1671302)]]
- → Dependency: [[OutgoingPaymentTypeDto (Enumeration 1671301)]]
- → Dependency: [[BankAccountDto (DataType 1671299)]]
- → Dependency: [[BankAccountDto (DataType 1671299)]]
- → Dependency: [[OutgoingPaymentTransactionSubtype (Enumeration 1671296)]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentID | string |  |
| paymentStatus | string |  |
| contractCode | string |  |
| paymentType | OutgoingPaymentTypeDto |  |
| transactionSubtype | OutgoingPaymentTransactionSubtype |  |
| sellerplaceCode | string |  |
| contractBA | BankAccountDto |  |
| {MOD}paymentBA | BankAccountDto |  |
| paymentAmount | moneyDto |  |
| orderCreationDate | date |  |
| partnerLegalForm | string |  |
| recipientName | string |  |
| recipientIdentificationNumber | string |  |
| paymentChannel | OutgoingPaymentChannelDto |  |
| {ADD}TXSourceID | string |  |
| {ADD}paymentStatusHistory | string |  |
