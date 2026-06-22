---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages/Access Rights"
domain: "Modules"
element_id: 1858908
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 POST financing package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages/Access Rights

## 📝 Notes

Creates new financing package version, either new financing package or just new version of existing financing package version.

## 🔗 Connections (7)

- → Dependency: [[{MOD}Financing package - validation]]
- → Dependency: [[Financing package activation validation rules]]
- → Realisation: [[04.411 Create Financing Package]]
- → Dependency: [[Application events (Interface 1858728)]]
- → Realisation: [[04.414 Activate Financing Package]]
- ← Realisation: [[financing-packages]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Financing Packages API
- Use Case: Notification in Use Cases
- Use Case: Use Case
