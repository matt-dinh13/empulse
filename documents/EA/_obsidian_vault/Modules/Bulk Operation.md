---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/Logical Data Model"
domain: "Modules"
element_id: 1878807
diagrams: 6
connections: 9
tags:
  - class
  - modules
---

# 🔷 Bulk Operation

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/Logical Data Model

## 🔗 Connections (9)

- ← Generalization: [[Add Service Operation]]
- ← Generalization: [[Replace Service Operation]]
- ← Generalization: [[Data Export Operation]]
- ← Aggregation: [[Data Export Result]]
- → Dependency: [[Bulk Operation Status]]
- ← Aggregation: [[Status Transition]]
- → Dependency: [[Bulk Operation Type]]
- ← Aggregation: [[Contract Result]]
- ← Generalization: [[{ADD}Debt Purchase Operation]]

## 📊 Appears In (6 diagrams)

- Logical: COMMON Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | datetime |  |
| Created By | string |  |
| Operation Type | Bulk Operation Type |  |
| Description | string |  |
| Status | Bulk Operation Status |  |
| Time From | time |  |
| Time To | time |  |
| Operation Subtype | string |  |
| Execution System | string |  |
