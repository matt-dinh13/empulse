---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Access Rights"
domain: "Modules"
element_id: 1862901
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.020 Create tariff item

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Access Rights

## 📝 Notes

Use case is intended for creation of a new tariff item (fee/penalty).

## 🔗 Connections (9)

- ← Realisation: [[Create tariff item]]
- ← Realisation: [[Set main tariff properties]]
- ← UseCase: [[{DEL}04.010 Create Tariff]]
- → UseCase «include»: [[{ADD}02.990 Notify Product Catalogue consumer]]
- → Dependency: [[Tariff Item Code generation]]
- → Realisation: [[REQ1 - Extending Tariff Item definition]]
- → Realisation: [[{DEL}04.020 Create tariff item]]
- ← Realisation: [[Create tariff item (Screen 1867012)]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Set Tariff Item
- Custom: Show Tariff
- Use Case: Tariff Items
