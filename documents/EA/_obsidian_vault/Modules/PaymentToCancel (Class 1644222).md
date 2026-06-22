---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentsWS (INCPAY)"
domain: "Modules"
element_id: 1644222
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 PaymentToCancel

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentsWS (INCPAY)

## 🔗 Connections (2)

- ← Dependency: [[CancelPaymentRequest]]
- → Dependency: [[SourceSystemType (Class 1644223)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentsWS (for external systems)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| idPayment | long |  |
| sourceSystem | SourceSystemType |  |
| sourceIdPayment | string |  |
