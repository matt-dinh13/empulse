---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873959
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Contract Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

Change of transitions in the contract status.

## 🔗 Connections (4)

- → Association: [[Contract Status Transition]]
- ← Association: [[Contract Status Transition]]
- → Dependency: [[Contract Status Type]]
- → Aggregation: [[Contract (Class 1873952)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Transferred Manually | Boolean | FALSE |
| Performed by | User |  |
| Creation Date | DateTime |  |
| Reason | Contract Status Transition Reason |  |
| Status | Contract Status Type |  |
| Notice | String |  |
| Requested by | User |  |
