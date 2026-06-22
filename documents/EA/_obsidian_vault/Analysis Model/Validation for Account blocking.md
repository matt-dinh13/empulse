---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Account management/Account blockage/Business rules"
domain: "Analysis Model"
element_id: 825897
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Validation for Account blocking

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account blockage/Business rules

## 📝 Notes

Validation fails when:
The account is already blocked for the same reason.
Action: System displays error message MSG_ACC_AlreadyBlocked.

User is not authorized for the action / operation.
Action: System displays standard error message

## 🔗 Connections (1)

- ← Dependency: [[12.609 Block account (UseCase 1849946)]]

## 📊 Appears In (2 diagrams)

- Custom: Rules: Account Blockage
- Use Case: Account Blockage use case model
