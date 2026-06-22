---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858757
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {DEL}01.601 Set Commodity Validation Rule

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Access Rights

## 📝 Notes

Creates new or updates existing Commodity Validation Rule.

## 🔗 Connections (7)

- ← Realisation: [[{DEL}CommodityWS]]
- ← Association: [[Internal Component (Actor 1854677)]]
- ← UseCase «include»: [[{DEL}01.612 Update Commodity Validation Rule UI]]
- ← UseCase «include»: [[{DEL}01.614 Clone Commodity Validation Rule UI]]
- ← UseCase «include»: [[{DEL}01.611 Create new Commodity Validation Rule UI]]
- → Realisation: [[01.601 Set Commodity Validation Rule]]
- → Dependency: [[{DEL}SetCommodityValidationRule - validation rules]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: {DEL}SetCommodityValidationRule
- Use Case: Commodity Validation Setting UC
- Use Case: UI for management of Commodity Validation Setting
