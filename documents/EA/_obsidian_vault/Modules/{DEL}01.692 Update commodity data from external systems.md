---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights"
domain: "Modules"
element_id: 1879004
diagrams: 3
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {DEL}01.692 Update commodity data from external systems

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights

## 📝 Notes

{DEL PCG-3924/}
This use case describes how BSL updates Commodity data according to request from external systems.

## 🔗 Connections (6)

- ← Realisation: [[{DEL}CommodityWS]]
- ← Association: [[Internal Component (Actor 1854677)]]
- → Dependency: [[Commodity Validation algorithm]]
- → Realisation: [[01.692 Update commodity data from external systems]]
- → Dependency: [[{DEL}CommodityDataRequest - validation rules]]
- → Realisation: [[REQ#3 - Update commodity]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: UpdateCommodityData
- Use Case: {DEL}Manage commodity data from external systems
