---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 924784
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 CHDD Days after last due date - cross validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

SERVICE.ChangeOfDueDateService.MaxDaysAfterLastDueDate >= SERVICE.ChangeOfDueDateService.MinDaysAfterLastDueDate
MSG_COMPARE_GREATER_THAN_EQUAL (label of Minimal days after last due date, label of Maximal days after last due date)

## 🔗 Connections (2)

- ← Dependency: [[Minimal days after last due date (GUIElement 924786)]]
- ← Dependency: [[Maximal days after last due date (GUIElement 924787)]]
