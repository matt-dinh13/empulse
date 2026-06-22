---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673242
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Incoming payment active

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Validation Rules

## 📝 Notes

Check if Incoming Payment.Status is „active“.
Show a message in case of rule failure: MSG_0139

## 🔗 Connections (1)

- ← Dependency: [[05.360 Cancel incoming payment on external request (UseCase 1855367)]]

## 📊 Appears In (3 diagrams)

- Custom: Validation Rules
- Use Case: Cancellation incoming payment manually
- Use Case: Cancellation incoming payment on external request
