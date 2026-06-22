---
type: DataType
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1671299
diagrams: 2
connections: 4
tags:
  - datatype
  - modules
---

# 📐 BankAccountDto

> **Type**: DataType · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Keeps information about bank accounts.

## 🔗 Connections (4)

- ← Dependency: [[OutgoingPaymentDto]]
- ← Dependency: [[OutgoingPaymentDto]]
- ← Dependency: [[OutgoingPaymentDto (Class 1671300)]]
- ← Dependency: [[OutgoingPaymentDto (Class 1671300)]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankCode | string |  |
| bankName | string |  |
| bankNumber | string |  |
| accountNumber | string |  |
| isTechnicalAccount | boolean |  |
