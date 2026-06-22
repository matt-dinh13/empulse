---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854271
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Incoming payment pairing is not locked

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

All active pairing records of Incoming payment are not locked.
If validation fails, message MSG_LOCKED_INCOMING_PAYMENT_PAIRING is showed

## 🔗 Connections (2)

- ← Dependency: [[05.060 Decouple incoming payment manually (UseCase 1854319)]]
- ← Dependency: [[{MOD}05.200 Perform decoupling (UseCase 1854303)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Cancellation incoming payment manually
- Use Case: Manual unpairing incoming payment from contract
