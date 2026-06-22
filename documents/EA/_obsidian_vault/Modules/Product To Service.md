---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model"
domain: "Modules"
element_id: 1879109
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 Product To Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Logical Data Model

## 📝 Notes

Assignment of services to product.
Relation between Product and Service is done through Service.Code.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{DEL}ProductServiceDataDto]]
- → Aggregation: [[{MOD}Product]]
- → Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (3 diagrams)

- Logical: Entities to be removed
- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service | Code |  |
| Sort Order | int |  |
| Service Type | string |  |
