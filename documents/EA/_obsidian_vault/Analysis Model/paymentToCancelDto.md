---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS"
domain: "Analysis Model"
element_id: 1848208
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 paymentToCancelDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS

## 🔗 Connections (3)

- → Dependency: [[SourceSystemDto (Enumeration 1855754)]]
- → Dependency: [[SourceSystemDto (Enumeration 1855754)]]
- ← Dependency: [[CancelIncomingPaymentRequest (Class 1848209)]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingPaymentModuleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentSourceSystem | SourceSystemDto |  |
| paymentCode | string |  |
| negativePaymentSourceSystem | SourceSystemDto |  |
| negativePaymentCode | string |  |
