---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentManagementWS"
domain: "Analysis Model"
element_id: 1414735
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelIncomingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentManagementWS

## 📝 Notes

A structure of request for canceling an incoming payment of defined ID

## 🔗 Connections (2)

- ← Dependency: [[PaymentManagementWS (Interface 1414725)]]
- → Dependency: [[CancelIncomingPaymentSourceSystemTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentCode | token |  |
| transactionNumber | string |  |
| sourceSystem | CancelIncomingPaymentSourceSystemTypeDto |  |
