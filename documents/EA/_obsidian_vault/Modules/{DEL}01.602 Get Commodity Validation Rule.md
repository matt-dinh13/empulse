---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858755
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL}01.602 Get Commodity Validation Rule

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Access Rights

## 📝 Notes

Returns list of Commodity Validation Rules according to specified search criteria.

## 🔗 Connections (9)

- ← Dependency: [[{DEL}CommodityWS]]
- ← Association: [[Internal Component (Actor 1854677)]]
- ← UseCase «include»: [[{DEL}01.612 Update Commodity Validation Rule UI]]
- ← UseCase «include»: [[{DEL}01.613 Search Commodity Validation Rule UI]]
- ← UseCase «include»: [[{DEL}01.614 Clone Commodity Validation Rule UI]]
- ← UseCase «include»: [[{DEL}01.615 Show Commodity Validation Rule detail UI]]
- → Dependency: [[{DEL}GetCommodityValidationRule - search filter]]
- → Dependency: [[{DEL}GetCommodityValidationRuleRequest - validation rules]]
- → Realisation: [[01.602 Get Commodity Validation Rule]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: GetCommodityValidationRule
- Use Case: Commodity Validation Setting UC
- Use Case: UI for management of Commodity Validation Setting
