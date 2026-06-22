---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/CreatePayment"
domain: "Analysis Model"
element_id: 1210355
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentToCreate

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/CreatePayment

## 🔗 Connections (3)

- ← Usage: [[CreatePaymentRequest]]
- → Usage: [[PayinCode]]
- → Usage: [[SourceSystemType (Class 1210356)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentsWS.CreatePayment

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
