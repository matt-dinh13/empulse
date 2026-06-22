---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3"
domain: "Analysis Model"
element_id: 1774724
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CreateAndValidatePaymentChanelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3

## 🔗 Connections (4)

- → Dependency: [[bankAccountData]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- ← Dependency: [[PaymentChannelRestAPI V3]]

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
| externalVefificationResult | string |  |
