---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes/Access Rights"
domain: "Modules"
element_id: 1859299
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 POST financing schemes

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes/Access Rights

## 📝 Notes

Creates new financing scheme version, either new financing scheme or just new version of existing financing scheme version.

## 🔗 Connections (6)

- ← Realisation: [[financing-schemes]]
- → Realisation: [[04.404 Activate Financing Scheme]]
- → Dependency: [[{MOD}Financing Scheme - validation]]
- → Dependency: [[Application events (Interface 1858728)]]
- → Realisation: [[04.401 Create Financing Scheme]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Financing Schemes API
- Use Case: Notification in Use Cases
- Use Case: Use Case
