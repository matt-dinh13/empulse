---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879600
diagrams: 4
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Contract Commodity

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Specifies which commodities were covered by the client's loan. It is important due to required commodity validations during a contract lifecycle.

## 🔗 Connections (2)

- → Dependency: [[Commodity Validation Status]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (4 diagrams)

- Logical: Contract
- Logical: Contract Commodity
- Logical: Contract Management
- Logical: Insurance Commodity domain

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity ID | string |  |
| Validation Status | Commodity Validation Status |  |
| Archived | boolean |  |
