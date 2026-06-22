---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights"
domain: "Modules"
element_id: 1865224
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {MOD}GET services

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights

## 📝 Notes

Returns service data according to the specified search criteria.

## 🔗 Connections (7)

- → Realisation: [[08.200 Provide Service Data]]
- → Dependency: [[Wildcard search]]
- → Realisation: [[REQ#1 Create a tab in Service detail for managing sales description]]
- → Dependency: [[{ADD}Get sales description for versioned entity]]
- ← Association: [[External Component]]
- ← Realisation: [[{MOD}ServiceDto]]
- ← Realisation: [[services (Class 1881079)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: One Level Requirement Hierarchy
- Logical: Service API
- Use Case: Use Case
