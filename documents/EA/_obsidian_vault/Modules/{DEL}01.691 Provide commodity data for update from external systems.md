---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights"
domain: "Modules"
element_id: 1879026
diagrams: 3
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {DEL}01.691 Provide commodity data for update from external systems

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights

## 📝 Notes

{DEL PCG-3924/}
This use case describes how BSL prepares and sends Commodity data which are needed for an update from external systems.

## 🔗 Connections (6)

- ← Realisation: [[{DEL}CommodityWS]]
- ← Association: [[Internal Component (Actor 1854677)]]
- → Realisation: [[01.691 Provide commodity data for update from external systems]]
- → Realisation: [[REQ#2 - Provide data of commodity for update]]
- → Dependency: [[{DEL}CommodityDataRequest - validation rules]]
- → Dependency: [[{MOD}Get Commodity Data Enabled For Update]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: GetCommodityDataForUpdate
- Use Case: {DEL}Manage commodity data from external systems
