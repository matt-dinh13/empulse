---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Business rules"
domain: "Modules"
element_id: 1415462
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Processing PaymentOrderRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Business rules

## 📝 Notes

This business rule describes processing of outgoing payment order from JMS message (PaymentOrderRequest) from HoSel and its transformation into comm tables.

Input:
PaymentOrderRequest

Algorithm:
System calls Processing OutgoingPaymentDto algorithm for all PaymentOrderRequest.outgoingPayments.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Processing OutgoingPaymentDto]]
- ← Dependency: [[PaymentOrderRequest (Class 1602950)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Logical: Outgoing payments - Communication Model
