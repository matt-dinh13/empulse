---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673228
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Amount range validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules

## 📝 Notes

Entered amount has to be greater than 0 and smaller than amount of divided payment.

Message in case of failure: MSG_0034.

## 🔗 Connections (1)

- ← Dependency: [[Divide incoming payment in BSL]]

## 📊 Appears In (3 diagrams)

- Custom: Validation Rules
- Use Case: Divide incoming payment
- Use Case: Divide incoming payment
