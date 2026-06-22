---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774730
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentChannelVerificationResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 📝 Notes

{ADD CBL-11220 PAYM-3896}

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- → Dependency: [[PaymentChannelResultCode]]

## 📊 Appears In (2 diagrams)

- Logical: PaymentChannelRestAPI - Verify Payment Channel
- Logical: PaymentChannelRestAPI - Verify Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| resultCode | PaymentChannelResultCode |  |
| description | string |  |
| accountHolderName | string |  |
