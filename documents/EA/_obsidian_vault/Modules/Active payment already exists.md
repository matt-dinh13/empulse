---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673309
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Active payment already exists

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules

## 📝 Notes

Active payment with this payment identification from this source system is already in system.
In case of failure message MSG_IncomingPaymentExists shows.

## 🔗 Connections (1)

- ← Dependency: [[05.361 Create incoming payment on external request (UseCase 1855364)]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Creation incoming payment on external request
