---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights"
domain: "Modules"
element_id: 1879024
diagrams: 3
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 {DEL}01.693 Validate commodity data from external systems

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights

## 📝 Notes

{DEL PCG-3924/}
This use case describes how BSL validates Commodity data according to request from external systems.

## 🔗 Connections (8)

- ← Realisation: [[{DEL}CommodityWS]]
- ← Association: [[Internal Component (Actor 1854677)]]
- → Association: [[Oracle Service Bus (OSB)]]
- → Realisation: [[REQ#4 - Validate commodity]]
- → Realisation: [[01.693 Validate commodity data from external systems]]
- → Dependency: [[Commodity Validation Rule filter]]
- → Dependency: [[{DEL}CommodityDataRequest - validation rules]]
- → Dependency: [[Commodity Validation algorithm]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: {DEL}ValidateCommodityData
- Use Case: {DEL}Manage commodity data from external systems
