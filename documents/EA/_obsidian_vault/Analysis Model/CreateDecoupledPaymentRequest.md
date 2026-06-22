---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS"
domain: "Analysis Model"
element_id: 1848204
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateDecoupledPaymentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS

## 🔗 Connections (3)

- → Dependency: [[SourceSystemDto (Enumeration 1855754)]]
- → Dependency: [[SourceSystemDto (Enumeration 1855754)]]
- ← Dependency: [[IncomingPaymentModuleWS (Interface 1855753)]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingPaymentModuleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentSourceSystem | SourceSystemDto |  |
| paymentCode | string |  |
| unpairedPaymentSourceSystem | SourceSystemDto |  |
| unpairedPaymentCode | string |  |
