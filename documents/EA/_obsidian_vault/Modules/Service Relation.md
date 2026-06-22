---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model"
domain: "Modules"
element_id: 1846086
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Service Relation

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model

## 📝 Notes

{ADD PCG-3135/}
Relations between services in service catalog

## 🔗 Connections (4)

- → Dependency: [[service (Boundary 1846101)]]
- → Dependency: [[service (Boundary 1846101)]]
- → Dependency: [[Relation Type]]
- → Aggregation: [[Service (Class 1846080)]]

## 📊 Appears In (1 diagrams)

- Logical: Service Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Source Service | string |  |
| Target Service | string |  |
| Relation Type | Relation Type |  |
| Active | boolean |  |
