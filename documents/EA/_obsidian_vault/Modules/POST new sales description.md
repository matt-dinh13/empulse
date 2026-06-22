---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions/Access Rights"
domain: "Modules"
element_id: 1845919
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 POST new sales description

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions/Access Rights

## 📝 Notes

Creates new sales description.

## 🔗 Connections (6)

- ← Realisation: [[{MOD}sales-descriptions]]
- ← Realisation: [[{ADD}Generate sales description name]]
- → Dependency: [[Sales description code]]
- → Dependency: [[{MOD}Sales description - validation]]
- → Realisation: [[{ADD}02.712 Manage sales description]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: One Level Requirement Hierarchy
- Logical: Sales Descriptions API
- Use Case: Use Case
