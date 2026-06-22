---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779739
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreateAndValidatePaymentChanelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 🔗 Connections (2)

- ← Usage: [[PaymentChannelRestAPI (Interface 1773140)]]
- → Dependency: [[bankAccountData (Class 1779744)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | BankAccountData |  |
| contractCode | string |  |
| externalCardId | int |  |
| paymentPurpose | varchar |  |
| salesroomCode | string |  |
| type | varchar |  |
| sourceType | string |  |
