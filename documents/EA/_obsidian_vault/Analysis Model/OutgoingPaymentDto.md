---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments"
domain: "Analysis Model"
element_id: 1587860
diagrams: 1
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 OutgoingPaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments

## 📝 Notes

This message is a request to banking system to realize payment order to the bank account of client or partner held in some other bank.

## 🔗 Connections (13)

- ← Dependency: [[CancelOugoingPaymentRequest]]
- ← Association: [[PaymentOrderRequest]]
- → Dependency: [[BankAccountDto (DataType 1587864)]]
- → Dependency: [[OutgoingPaymentChannelDto (Enumeration 1671302)]]
- → Dependency: [[BankAccountDto (DataType 1671299)]]
- → Dependency: [[OutgoingPaymentTransactionSubtype]]
- → Dependency: [[OutgoingPaymentTypeDto]]
- → Dependency «transformation»: [[ORDERPAY140]]
- → Dependency: [[OutgoingPaymentTypeDto (Enumeration 1671301)]]
- → Dependency: [[{MOD}Processing OutgoingPaymentDto]]
- → Dependency: [[BankAccountDto (DataType 1587864)]]
- → Dependency: [[BankAccountDto (DataType 1671299)]]
- → Dependency: [[OutgoingPaymentChannelDto]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing payments request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}hcBankAccountNumber |  |  |
| {ADD}loanCode |  |  |
| paymentID | string |  |
| paymentStatus | string |  |
| contractCode | string |  |
| paymentType | OutgoingPaymentTypeDto |  |
| transactionSubtype | OutgoingPaymentTransactionSubtype |  |
| sellerplaceCode | string |  |
| contractBA | BankAccountDto |  |
| {MOD}paymentBA | BankAccountDto |  |
| paymentAmount | MoneyDto |  |
| orderCreationDate | date |  |
| partnerLegalForm | string |  |
| recipientName | string |  |
| recipientIdentificationNumber | string |  |
| paymentChannel | OutgoingPaymentChannelDto |  |
