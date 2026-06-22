---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights"
domain: "Modules"
element_id: 1879003
diagrams: 3
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {DEL}01.696 Search commodity data from external systems

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights

## 📝 Notes

{DEL PCG-3924/}
This use case describes how BSL searches Commodity data from external systems.

## 🔗 Connections (6)

- ← Realisation: [[{DEL}CommodityWS]]
- ← Association: [[Internal Component (Actor 1854677)]]
- → Realisation: [[REQ#5 - Add SearchCommodityDataWS method]]
- → Dependency: [[{DEL}SearchCommodityDataRequest - validation rules]]
- → Realisation: [[01.696 Search commodity data from external systems]]
- → Dependency: [[{DEL}SearchCommodityDataRequest - filter]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: SearchCommodityData
- Use Case: {DEL}Manage commodity data from external systems
