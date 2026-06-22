---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID"
domain: "Analysis Model"
element_id: 1604561
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 KTP number length

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID

## 📝 Notes

Number of KTP document must be fix length of 16 digits {DEL CSI-367} or 17 digits {/DEL}.
No spaces are allowed.

If this is not true, warning is raised (MSG_KTP_LENGTH).

## 🔗 Connections (2)

- ← Dependency: [[KTP number (Action 1604564)]]
- ← Dependency: [[KTP validation rule]]

## 📊 Appears In (2 diagrams)

- Custom: Document validation - ID
- Custom: Validation Rules - ID
