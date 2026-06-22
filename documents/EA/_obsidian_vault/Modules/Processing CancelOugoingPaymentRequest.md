---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Business rules"
domain: "Modules"
element_id: 1415458
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Processing CancelOugoingPaymentRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Business rules

## 📝 Notes

This business rule describes processing of canceled outgoing payment of JMS message (CancelOutgoingPaymentRequest) from HoSel and its transformation into comm tables.

Input:
CancelOutgoingPaymentRequest

Algorithm:
System calls Processing OutgoingPaymentDto algorithm with CancelOutgoingPaymentRequest.outgoingPayment as a parameter.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Processing OutgoingPaymentDto]]
- ← Dependency: [[CancelOutgoingPaymentRequest]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Logical: Outgoing payments - Communication Model
