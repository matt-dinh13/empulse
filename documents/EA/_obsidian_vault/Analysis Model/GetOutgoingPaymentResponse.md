---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1869670
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetOutgoingPaymentResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentRestAPI (Interface 1869669)]]
- → Dependency: [[OutgoingPaymentResultCode]]
- → Dependency: [[OutgoingPaymentData]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingPaymentRestAPI - Get Outgoing Payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| outgoingPaymentData | OutgoingPaymentData |  |
| resultCode | OutgoingPaymentResultCode |  |
