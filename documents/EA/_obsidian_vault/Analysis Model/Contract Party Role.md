---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1862294
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Contract Party Role

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Relation of company (any party in general) to the contract

## 🔗 Connections (4)

- → Dependency: [[{MOD}Lender]]
- → Dependency: [[Contract Party Role Type]]
- ← Aggregation: [[Contract Party Role Attribute]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (3 diagrams)

- Logical: Contract
- Logical: Contract - Party roles
- Logical: Contract financial partnership - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Party Code | string |  |
| Role Type | Contract Party Role Type |  |
| Valid From | dateTime |  |
| Valid To | dateTime |  |
| Archived | boolean | false |
