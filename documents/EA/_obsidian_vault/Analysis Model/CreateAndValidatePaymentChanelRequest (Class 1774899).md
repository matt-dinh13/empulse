---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774899
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreateAndValidatePaymentChanelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelRestAPI v4 (Interface 1774884)]]
- → Dependency: [[bankAccountData (Class 1774890)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - Create and Validate Payment Channel

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
| externalVefificationResult | string |  |
| {ADD}targetType | string |  |
