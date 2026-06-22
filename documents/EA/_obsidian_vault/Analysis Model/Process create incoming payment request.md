---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model"
domain: "Analysis Model"
element_id: 1855721
diagrams: 1
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 Process create incoming payment request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Use Case Model

## 📝 Notes

{ADD MODULARIZATION}
Use case for processing of  createIncomingPaymentRequest INCPAY module.

## 🔗 Connections (6)

- → Dependency: [[Positive amount (Requirement 1854273)]]
- → UseCase «include»: [[05.182 Pair payment with contract (UseCase 1854310)]]
- → Dependency: [[{MOD}Contract pairing allowed]]
- → Dependency: [[Active payment already exists (Requirement 1854278)]]
- → Dependency: [[Check if Contract exists (Requirement 1854269)]]
- ← Dependency: [[Incoming payment module]]

## 📊 Appears In (1 diagrams)

- Use Case: Creating incoming payment
