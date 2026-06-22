---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights"
domain: "Modules"
element_id: 1862642
diagrams: 4
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}POST tariffs

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights

## 📝 Notes

Creates new tariffs version, either new tariff or just copy of existing tariff version.

## 🔗 Connections (11)

- → Realisation: [[04.060 Set main Tariff properties]]
- → Dependency: [[Application events (Interface 1858728)]]
- → Realisation: [[04.180 Activate Tariff version manually]]
- → Dependency: [[{ADD}User check for activation]]
- → Dependency: [[{MOD}Tariff activation validation rules]]
- → Dependency: [[Tariff - validation]]
- → Realisation: [[04.160 Create Tariff version]]
- → Realisation: [[04.180 Activate Tariff version]]
- → Dependency: [[Version number]]
- ← Realisation: [[tariffs]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Tariff API
- Use Case: Notification in Use Cases
- Use Case: Use Case
