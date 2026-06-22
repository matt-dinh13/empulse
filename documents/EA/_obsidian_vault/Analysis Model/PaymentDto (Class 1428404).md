---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentManagementWS"
domain: "Analysis Model"
element_id: 1428404
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentManagementWS

## 📝 Notes

A structure of a request for payment creation

## 🔗 Connections (2)

- ← Dependency: [[CreateIncomingPaymentRequest]]
- → Dependency: [[PaymentTypeDto (Enumeration 1428403)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyDto |  |
| contractCode | token |  |
| accountNumber | token |  |
| depositDate | date |  |
| paymentType | PaymentTypeDto |  |
| {ADD}paymentChannel | string |  |
