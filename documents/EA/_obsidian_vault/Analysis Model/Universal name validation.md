---
type: Action
stereotype: "RuleTask"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Personal data validation"
domain: "Analysis Model"
element_id: 1478581
diagrams: 1
connections: 4
tags:
  - action
  - analysis-model
---

# 📄 Universal name validation

> **Type**: Action · **Stereotype**: «RuleTask»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Personal data validation

## 📝 Notes

Part of person's name.
First name (name1), last name (name2), mather's maiden name (name 4).

## 🔗 Connections (4)

- → Dependency: [[Length _= 30]]
- → Dependency: [[Text containing [a-zA-Z_-_.' ]+]]
- → Dependency: [[Text character set (Requirement 1789775)]]
- ← Dependency: [[Mother maiden name (GUIElement 1640044)]]

## 📊 Appears In (1 diagrams)

- Custom: Personal data validation
