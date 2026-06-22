---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_General Rules/System behavior"
domain: "Analysis Model"
element_id: 1764665
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Forms for data input

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_General Rules/System behavior

## 📝 Notes

When an input form appears, then the focus is set on the first input field (usually in top left corner). If this field contains a value, then the value won't be selected (cursor is shown at the end of input field).

Values in input fields are by default trimmed from both sides. When other behavior is required, then it has to be mentioned in use case specification.

In general when user doesn't insert a financial amount value to input field, then it's supposed to be stored as null value. When other behavior is required, then it has to be specified in described field element.

## 🔗 Connections (1)

- ← Dependency: [[General rules for user interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: General rules for system behavior
