---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Provided Services/Interface Provided/ProvideTariffDataWS/Tariff Data"
domain: "Modules"
element_id: 1152473
diagrams: 1
connections: 22
tags:
  - class
  - modules
---

# 🔷 Tariff Item

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Provided Services/Interface Provided/ProvideTariffDataWS/Tariff Data

## 🔗 Connections (22)

- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Association: [[Tariff]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]
- → Dependency: [[{MOD}Tariff Item]]

## 📊 Appears In (1 diagrams)

- Logical: Tariff data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Type Code | Code |  |
| Group | Text |  |
| Limit Number Based On | Text |  |
| Limit Number From | Number |  |
| Limit Number To | Number |  |
| Limit Amount Based On | Text |  |
| Limit From | MoneyType |  |
| Limit To | MoneyType |  |
| Calculation Method | Text |  |
| Fixed Amount | MoneyType |  |
| Percentage | Percentage |  |
| Percentage Based On | Text |  |
| Rounding | Text |  |
| Rounding Scale | MoneyType |  |
| Min Amount | MoneyType |  |
| Max Amount | MoneyType |  |
| Annual Rate Projection | Text |  |
| Tax | Number |  |
| Min Amount To Zero | boolean |  |
