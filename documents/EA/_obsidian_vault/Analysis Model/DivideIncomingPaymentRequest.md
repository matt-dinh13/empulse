---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS"
domain: "Analysis Model"
element_id: 1848202
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DivideIncomingPaymentRequest

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
| originalPaymentSourceSystem | SourceSystemDto |  |
| originalPaymentCode | string |  |
| newPaymentSourceSystem | SourceSystemDto |  |
| negativePaymentCode | string |  |
| firstPaymentCode | string |  |
| firstPaymentAmount | MoneyDto |  |
| secondPaymentCode | string |  |
