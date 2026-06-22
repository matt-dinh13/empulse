---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873954
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Business Event

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

This entity keeps information about contract updates and event related to the contract (e.g. significant events on insurance, card account etc.).

## 🔗 Connections (2)

- ← Aggregation: [[Business Event Attribute]]
- → Aggregation: [[Contract (Class 1873952)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Modification Type | {MOD}Business Event Type |  |
| Modification Date | DateTime |  |
| Is Internal User | int |  |
| Salesroom Code | string |  |
