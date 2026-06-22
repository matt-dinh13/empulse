---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/ID"
domain: "Modules"
element_id: 1637982
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 KTP number length

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/ID

## 📝 Notes

Number of KTP document must be fix length of 16 digits {DEL CSI-367} or 17 digits {/DEL}.
No spaces are allowed.

If this is not true, warning is raised (MSG_KTP_LENGTH).

## 🔗 Connections (1)

- ← Dependency: [[KTP number (Action 1637990)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - ID
