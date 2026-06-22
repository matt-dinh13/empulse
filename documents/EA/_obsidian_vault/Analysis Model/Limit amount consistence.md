---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Validation rules/Common for all variants"
domain: "Analysis Model"
element_id: 1789760
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Limit amount consistence

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Validation rules/Common for all variants

## 📝 Notes

If value limit amount based on is defined (filled in) then at least one of values limit amount from, limit amount to is mandatory else these values must be empty.
(MSG_LIMIT_AMOUNT_AT_LEAST_ONE)
(MSG_LIMITS_SHOULD_BE_NULL)

## 🔗 Connections (3)

- ← Dependency: [[Limit amount from]]
- ← Dependency: [[Limit amount based on (GUIElement 1867017)]]
- ← Dependency: [[Limit amount to (GUIElement 1866986)]]

## 📊 Appears In (1 diagrams)

- Custom: General rule tasks
