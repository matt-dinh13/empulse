---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/KZ"
domain: "Analysis Model"
element_id: 1572559
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Cyrilic alphabet character set

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/KZ

## 📝 Notes

Allowed characters:
- russian alphabet \u0400-\u04FF (includes kazakh alphabet \u0410 - \u044f)
- number (0-9)
- space ' '
- dash '-'
- dot '.'
- comma ','
- slash '/'

If the user add wrong data MSG_WRONG_PATTERN appears.

## 🔗 Connections (5)

- ← Dependency: [[District (Action 1572573)]]
- ← Dependency: [[Flat (Action 1572571)]]
- ← Dependency: [[Town (Action 1572567)]]
- ← Dependency: [[Street name (Action 1572566)]]
- ← Dependency: [[House number (Action 1572565)]]

## 📊 Appears In (1 diagrams)

- Custom: Attributes value validation rules - KZ
