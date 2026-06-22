---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3"
domain: "Analysis Model"
element_id: 1774717
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GetPaymentChannelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3

## 🔗 Connections (4)

- → Dependency: [[bankAccountData]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- ← Dependency: [[PaymentChannelRestAPI V3]]

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
