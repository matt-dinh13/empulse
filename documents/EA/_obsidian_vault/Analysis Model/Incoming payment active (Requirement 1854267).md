---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Business Rules"
domain: "Analysis Model"
element_id: 1854267
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Incoming payment active

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Business Rules

## 📝 Notes

Check if Incoming Payment.Status is „active“.
Show a message in case of rule failure: MSG_0139

## 🔗 Connections (1)

- ← Dependency: [[05.045 Cancel incoming payment (UseCase 1855717)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Use Case: Cancellation incoming payment manually
