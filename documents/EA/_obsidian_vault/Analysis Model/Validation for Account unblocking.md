---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Account management/Account blockage/Business rules"
domain: "Analysis Model"
element_id: 825896
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Validation for Account unblocking

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account blockage/Business rules

## 📝 Notes

Validation fails when:
Selected unblocking action is not of type "manual blocking".
(UI prevents this situation by only allowing user to choose from manual blocking reasons.)

## 🔗 Connections (1)

- ← Dependency: [[12.610 Unblock account (UseCase 1849947)]]

## 📊 Appears In (2 diagrams)

- Custom: Rules: Account Blockage
- Use Case: Account Blockage use case model
