---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import/Access Rights"
domain: "Modules"
element_id: 1805802
diagrams: 4
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Import product catalog settings

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import/Access Rights

## 📝 Notes

Creates new products setting. If specified entity is not present new entity is created with version number = 1 otherwise new version is created and updated according to the provided data.

## 🔗 Connections (4)

- → Realisation: [[{ADD}UC 02.160 Import product catalog setting]]
- ← Realisation: [[product-export]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Product catalog export/import API
- Use Case: Export/Import product setting
- Use Case: Use Case
