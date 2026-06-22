---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentManagementWS (INCPAY)"
domain: "Modules"
element_id: 1644286
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 CancelIncomingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentManagementWS (INCPAY)

## 📝 Notes

A structure of request for canceling an incoming payment of defined ID

## 🔗 Connections (1)

- ← Dependency: [[PaymentManagementWS (Interface 1644280)]]

## 📊 Appears In (1 diagrams)

- Logical: Incoming Payments Module - PaymentManagementWS (for local systems)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentCode | string |  |
| sourceSystem | CancelIncomingPaymentSourceSystemTypeDto |  |
| transactionNumber | string |  |
