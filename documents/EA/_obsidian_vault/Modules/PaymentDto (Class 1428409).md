---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentManagementWS (INCPAY)"
domain: "Modules"
element_id: 1428409
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 PaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentManagementWS (INCPAY)

## 📝 Notes

A structure of a request for payment creation

## 🔗 Connections (2)

- → Dependency: [[PaymentTypeDto (Enumeration 1428408)]]
- ← Dependency: [[CreateIncomingPaymentRequest (Class 1644284)]]

## 📊 Appears In (1 diagrams)

- Logical: Incoming Payments Module - PaymentManagementWS (for local systems)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyDto |  |
| accountNumber | token |  |
| depositDate | date |  |
| paymentType | PaymentTypeDto |  |
| {ADD}paymentChannel | string |  |
