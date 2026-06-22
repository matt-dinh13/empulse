---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Access Rights"
domain: "Modules"
element_id: 1841492
diagrams: 3
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 POST sales package items

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Access Rights

## 📝 Notes

Adds given items to sales packages. If item already exists in sales package then package is silently skipped.

## 🔗 Connections (4)

- ← Realisation: [[sales-packages_items]]
- → Realisation: [[09.301 Set Sales Package]]
- → Dependency: [[SalesPackageItem - validation]]
- ← Association: [[External Component]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Sales Packages API
- Use Case: Use Case
