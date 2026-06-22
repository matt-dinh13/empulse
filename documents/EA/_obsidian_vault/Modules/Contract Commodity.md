---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873947
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Contract Commodity

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

Specifies which commodities were covered by the client's loan. It is important due to required commodity validations during a contract lifecycle.

## 🔗 Connections (1)

- → Aggregation: [[Contract (Class 1873952)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity ID | string |  |
| Validation Status | Commodity Validation Status |  |
| Archived | boolean |  |
