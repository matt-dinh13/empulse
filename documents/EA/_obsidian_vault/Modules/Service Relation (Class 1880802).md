---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model"
domain: "Modules"
element_id: 1880802
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 Service Relation

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model

## 📝 Notes

Defines pairs of services which are mutually exclusive/inclusive (cannot/must be adjusted together on a single contract). Exclusivity/Inclusivity is defined between services regardless of their versions and is not oriented, i.e. exclusivity/inclusivity is valid in both directions.

## 🔗 Connections (3)

- → Dependency: [[Service (Class 1880804)]]
- → Dependency: [[{MOD}Service Relation Type]]
- → Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (2 diagrams)

- Logical: Loan Service Structure
- Logical: Service data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service Code 1 | Text |  |
| Service Code 2 | Text |  |
| Service Relation Type | {MOD}Service Relation Type |  |
