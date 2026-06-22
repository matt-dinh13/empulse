---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Access Rights"
domain: "Modules"
element_id: 1859106
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {MOD}PUT product activations

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Access Rights

## 📝 Notes

Activates or plans activation of given products. Only inactive and for activation versions can be activated.

## 🔗 Connections (7)

- ← Realisation: [[{ADD}product-activations]]
- → Realisation: [[02.260 Activate product version manually]]
- → Realisation: [[02.260 Activate product version]]
- → Dependency: [[{MOD}Product activation validation rules]]
- → Dependency: [[{ADD}User check for activation]]
- → Dependency: [[Product - validation]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)
- Logical: Product API
- Use Case: Use Case
