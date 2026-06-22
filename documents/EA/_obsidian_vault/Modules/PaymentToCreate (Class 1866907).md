---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentsWS (INCPAY)"
domain: "Modules"
element_id: 1866907
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 PaymentToCreate

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentsWS (INCPAY)

## 🔗 Connections (3)

- → Dependency: [[SourceSystemType (Class 1644223)]]
- → Dependency: [[PayinCode (Class 1866908)]]
- ← Dependency: [[CreatePaymentRequest (Class 1866910)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentsWS (for external systems)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyDto |  |
| contractCode | string |  |
| date | date |  |
| description | string |  |
| channel | string |  |
| payinCode | PayinCode |  |
| sourceIdPayment | string |  |
| sourceSystem | SourceSystemType |  |
| transactionDate | Date |  |
| transactionTime | DateTime |  |
| transactionNumber | string |  |
