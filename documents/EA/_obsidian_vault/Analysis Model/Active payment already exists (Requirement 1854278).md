---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854278
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Active payment already exists

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

Active payment with this payment identification from this source system is already in system.
In case of failure message MSG_IncomingPaymentExists shows.

## 🔗 Connections (1)

- ← Dependency: [[Process create incoming payment request]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Creating incoming payment
