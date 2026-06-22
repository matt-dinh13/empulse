---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights"
domain: "Modules"
element_id: 1862644
diagrams: 3
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}PUT tariff activations

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights

## 📝 Notes

Activates or plans activation of given tariffs. Only inactive and for activation versions can be activated.

## 🔗 Connections (6)

- → Realisation: [[04.180 Activate Tariff version manually]]
- → Dependency: [[{ADD}User check for activation]]
- → Realisation: [[04.180 Activate Tariff version]]
- → Dependency: [[Tariff - validation]]
- ← Realisation: [[{ADD}tariff-activations]]
- ← Association: [[External Component]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Tariff API
- Use Case: Use Case
