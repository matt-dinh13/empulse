---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1869709
diagrams: 2
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 ECS Provider

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

List of ECS providers

## 🔗 Connections (4)

- ← Dependency: [[ECS Provider]]
- ← Dependency: [[DDM Draft]]
- ← Dependency: [[DDM (Class 1869699)]]
- → Dependency: [[ECS Provider type]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - DDM
- Logical: DDM Draft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Address | Text |  |
| Code | Code |  |
| Due Date Offset | Number (2,0) |  |
| Name | Name |  |
| Order | Number (2,0) |  |
| Weight | Percent |  |
| {DEL}E-mandate Weight | Percent |  |
| ECS Provider type | ECS Provider type |  |
