---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Import product settings/Access Rights"
domain: "Modules"
element_id: 1872140
diagrams: 4
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 {ADD}02.160 Import product catalog setting UI

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Import product settings/Access Rights

## 📝 Notes

{ADD PCG-5596/}
For country: PH
This use case enables user to import product setting via UI.

## 🔗 Connections (10)

- → Dependency: [[{MOD}Financing Scheme - validation]]
- → Dependency: [[Tariff - validation]]
- → Dependency: [[{MOD}Financing package - validation]]
- → Dependency: [[{MOD}ProductProfileInputDto - validation rules]]
- → Realisation: [[{ADD}UC 02.160 Import product catalog setting]]
- → Dependency: [[Product - validation]]
- → Dependency: [[{ADD}Import product catalog settings]]
- → Dependency: [[Service - validation]]
- ← Realisation: [[Import Product setting]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Import product setting
- Custom: PCG-5596 BRPH-2308 - Export/import products between environments
- Use Case: Export/Import product setting
