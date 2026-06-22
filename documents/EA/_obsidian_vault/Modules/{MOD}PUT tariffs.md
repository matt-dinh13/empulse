---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights"
domain: "Modules"
element_id: 1862646
diagrams: 4
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}PUT tariffs

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights

## 📝 Notes

Updates given tariffs. Only active, for activation and inactive version can be updated. New version is created in case of active version update and current active version is terminated if new version is set to active.

## 🔗 Connections (11)

- → Dependency: [[Version number]]
- → Realisation: [[04.180 Activate Tariff version manually]]
- → Realisation: [[04.180 Activate Tariff version]]
- → Realisation: [[04.160 Create Tariff version]]
- → Dependency: [[Tariff - validation]]
- → Dependency: [[Application events (Interface 1858728)]]
- → Realisation: [[04.060 Set main Tariff properties]]
- → Dependency: [[{MOD}Tariff activation validation rules]]
- → Dependency: [[{ADD}User check for activation]]
- ← Realisation: [[tariffs]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Tariff API
- Use Case: Notification in Use Cases
- Use Case: Use Case
