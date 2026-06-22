---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Access Rights"
domain: "Modules"
element_id: 1859110
diagrams: 5
connections: 12
tags:
  - usecase
  - modules
---

# 🎯 {MOD}POST products

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Access Rights

## 📝 Notes

Creates new product version, either new product or just copy of existing product version.

## 🔗 Connections (12)

- ← Realisation: [[products (Class 1850263)]]
- → Realisation: [[02.601 Set main product properties]]
- → Dependency: [[Product - validation]]
- → Dependency: [[{MOD}Product activation validation rules]]
- → Realisation: [[02.260 Activate product version manually]]
- → Dependency: [[Version number]]
- → Dependency: [[{ADD}User check for activation]]
- → Realisation: [[02.080 Create product version]]
- → Realisation: [[02.260 Activate product version]]
- → Realisation: [[02.050 Create product]]
- → Dependency: [[Application events (Interface 1858728)]]
- ← Association: [[External Component]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)
- Logical: Product API
- Use Case: Notification in Use Cases
- Use Case: Use Case
