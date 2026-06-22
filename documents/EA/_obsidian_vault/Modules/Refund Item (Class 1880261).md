---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model"
domain: "Modules"
element_id: 1880261
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Refund Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model

## 📝 Notes

{ADD PAYM-4601}
This entity is used for storing of status of a refund (or refunds) registered for the payment. 
While refund processing itself is done elsewhere, this entity is needed because some payment operations might be limited when a refund in certain status is linked to a payment.

## 🔗 Connections (3)

- → Dependency: [[Refund Status Type (Enumeration 1880273)]]
- → Dependency: [[RefundSourceSystemType (DataType 1880264)]]
- → Association: [[Incoming Payment (Class 1880259)]]

## 📊 Appears In (1 diagrams)

- Logical: Incoming payments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | Refund Status Type |  |
| Contract code | string |  |
