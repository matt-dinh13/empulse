---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom/Access Rights"
domain: "Modules"
element_id: 1841525
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 DELETE salesrooms products

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom/Access Rights

## 📝 Notes

Removes given products from given salesrooms. All assignments of products are removed.

## 🔗 Connections (5)

- ← Realisation: [[products]]
- → Dependency: [[{MOD}SalesroomItemDto - validation]]
- → Realisation: [[09.270 Assign product to salesroom]]
- ← Association: [[External Component]]
- ← Dependency: [[Remove Assignment]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Products Assignment Governance
- Logical: Salesroom API
- Use Case: Use Case
