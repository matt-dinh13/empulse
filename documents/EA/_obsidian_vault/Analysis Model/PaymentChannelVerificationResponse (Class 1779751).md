---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779751
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentChannelVerificationResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11220 PAYM-3896}

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- → Dependency: [[PaymentChannelResultCode (Enumeration 1779747)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - PaymentChannelVerification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| resultCode | PaymentChannelResultCode |  |
| description | string |  |
| accountHolderName | string |  |
