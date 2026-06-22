---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879581
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Contract SubStatus Transitions

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Change of transitions in the contract sub-status.

## 🔗 Connections (6)

- → Dependency: [[Contract SubStatus]]
- → Association: [[Contract SubStatus Transitions]]
- ← Association: [[Contract SubStatus Transitions]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- → Association: [[Contract Status Transition (Class 1879574)]]
- → Association: [[{MOD}Contract (Boundary 1771504)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract - Status

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created by | User |  |
| Creation Date | DateTime |  |
| SubStatus | Contract SubStatus |  |
