---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13715 (CLM-4176) Adding Bank Information Reference for Customer in PIF"
domain: "Requirements Model"
element_id: 1779737
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 GetPaymentChannelRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13715 (CLM-4176) Adding Bank Information Reference for Customer in PIF

## 🔗 Connections (1)

- ← Usage: [[PaymentChannelRestAPI (Interface 1773140)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-13715 (CLM-4176) Adding Bank Information Reference for Customer in PIF
- Logical: PaymentChannelRestAPI - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dataExchangeID | int |  |
| contractCode | int |  |
| CUID | int |  |
| bankAccountNumber | string |  |
| type | string |  |
| purpose | string |  |
| validPaymentChannel | boolean |  |
| OnlyValidated | boolean |  |
