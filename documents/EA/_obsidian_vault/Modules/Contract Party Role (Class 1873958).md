---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873958
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Contract Party Role

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

Relation of company (any party in general) to the contract

## 🔗 Connections (2)

- ← Aggregation: [[Contract Party Role Attribute (Class 1873965)]]
- → Aggregation: [[Contract (Class 1873952)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Party Code | string |  |
| Role Type | Contract Party Role Type |  |
| Valid From | dateTime |  |
| Valid To | dateTime |  |
| Archived | boolean | false |
