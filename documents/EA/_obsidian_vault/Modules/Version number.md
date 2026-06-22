---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Business Rules"
domain: "Modules"
element_id: 1208894
diagrams: 9
connections: 15
tags:
  - requirement
  - modules
---

# 📋 Version number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Business Rules

## 📝 Notes

Rule for generating of number for new version of versioned object.
Version number
1 for the first version (when creating a new instance)
N+1 for other versions (when creating a new version of existing instance), N is maximal version in object scope.
If version number > 999 then error is generated and parent use case is terminated.

## 🔗 Connections (15)

- ← Dependency: [[{DEL}04.015 Create Tariff by copy]]
- ← Dependency: [[{DEL}04.010 Create Tariff]]
- ← Dependency: [[{DEL}04.160 Create Tariff version]]
- ← Dependency: [[{DEL}08.120 Create Service]]
- ← Dependency: [[{DEL}08.125 Create Service by copy]]
- ← Dependency: [[{DEL}08.130 Create Service version]]
- ← Dependency: [[{MOD}POST products]]
- ← Dependency: [[{MOD}PUT products]]
- ← Dependency: [[{MOD}PUT tariffs]]
- ← Dependency: [[{MOD}POST tariffs]]
- ← Dependency: [[{MOD}PUT services]]
- ← Dependency: [[{MOD}POST services]]
- ← Dependency: [[{DEL}02.050 Create product]]
- ← Dependency: [[{DEL}02.080 Create product version]]
- ← Dependency: [[{DEL}02.060 Create product by copy (UseCase 1872112)]]

## 📊 Appears In (9 diagrams)

- Custom: Business Rules for Versioned Entity
- Custom: General business rules
- Use Case: Manage Insurance Program
- Use Case: Manage Product
- Use Case: Manage Services
- Use Case: Tariffs
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
