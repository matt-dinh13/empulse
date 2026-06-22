---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879574
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Contract Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Change of transitions in the contract status.

## 🔗 Connections (8)

- ← Association: [[Contract SubStatus Transitions]]
- → Dependency: [[Contract Status Transitions Reasons]]
- → Association: [[Contract Status Transition (Class 1879574)]]
- ← Association: [[Contract Status Transition (Class 1879574)]]
- → Dependency: [[Reject reason]]
- → Dependency: [[Contract Status Type (Class 1880196)]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- → Association: [[{MOD}Contract (Boundary 1771504)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract - Status

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
