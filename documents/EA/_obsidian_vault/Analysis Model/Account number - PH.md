---
type: Action
stereotype: "RuleTask"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Validation rules/PH"
domain: "Analysis Model"
element_id: 1351112
diagrams: 1
connections: 5
tags:
  - action
  - analysis-model
---

# 📄 Account number - PH

> **Type**: Action · **Stereotype**: «RuleTask»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Validation rules/PH

## 📝 Notes

This is a variant specific validation rule for account number.

Validation algorithm
Apply linked simple validations (mandatory, length, number format) and if exists Bank. Account number validation, then apply also this validation.

## 🔗 Connections (5)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Account number format]]
- → Dependency: [[Account number length]]
- ← Dependency: [[Account number validation]]
- ← Dependency: [[Account number (GUIElement 1873799)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules PH
