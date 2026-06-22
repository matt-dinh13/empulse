---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/Logical Data Model"
domain: "Modules"
element_id: 1878805
diagrams: 5
connections: 4
tags:
  - class
  - modules
---

# 🔷 Contract Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/Logical Data Model

## 🔗 Connections (4)

- → Dependency: [[Validation Status]]
- → Dependency: [[Validation Status]]
- → Aggregation: [[Bulk Operation]]
- ← Generalization: [[{ADD}Debt Purchase Result]]

## 📊 Appears In (5 diagrams)

- Logical: COMMON Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}Contract Code | string |  |
| Validation Status | Validation Status |  |
| Validation Reason | string |  |
| Validation Date | datetime |  |
| Execution Status | Validation Status |  |
| Execution Reason | string |  |
| Execution Date | datetime |  |
| Contract Service ID | int |  |
