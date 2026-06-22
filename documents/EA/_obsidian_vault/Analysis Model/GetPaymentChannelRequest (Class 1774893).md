---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774893
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetPaymentChannelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelRestAPI v4 (Interface 1774884)]]
- → Dependency: [[bankAccountData (Class 1774890)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dataExchangeID | int |  |
| contractCode | int |  |
| CUID | int |  |
| type | string |  |
| purpose | string |  |
| validPaymentChannel | boolean |  |
| OnlyValidated | boolean |  |
| bankAccountData | bankAccountData |  |
