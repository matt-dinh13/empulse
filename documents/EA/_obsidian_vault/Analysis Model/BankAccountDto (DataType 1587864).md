---
type: DataType
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments"
domain: "Analysis Model"
element_id: 1587864
diagrams: 4
connections: 4
tags:
  - datatype
  - analysis-model
---

# 📐 BankAccountDto

> **Type**: DataType · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/Outgoing Payments

## 📝 Notes

Keeps information about bank accounts.

## 🔗 Connections (4)

- ← Dependency: [[{ADD}GetPaymentChannelResponse]]
- ← Dependency: [[{MOD}PaymentChannelDto]]
- ← Dependency: [[OutgoingPaymentDto]]
- ← Dependency: [[OutgoingPaymentDto]]

## 📊 Appears In (4 diagrams)

- Logical: Outgoing payments request
- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Get Payment Channel
- Logical: PaymentChannelWSV3 - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankCode | string |  |
| bankName | string |  |
| bankNumber | string |  |
| accountNumber | string |  |
| isTechnicalAccount | boolean |  |
