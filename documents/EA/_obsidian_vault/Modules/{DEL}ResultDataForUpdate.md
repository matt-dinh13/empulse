---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityDataForUpdate"
domain: "Modules"
element_id: 1746075
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultDataForUpdate

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityDataForUpdate

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (5)

- → Dependency: [[{DEL}CommodityDataValues]]
- ← Dependency: [[{DEL}GetCommodityDataForUpdateResponse]]
- → Dependency: [[{DEL}CommodityDataEnabledForUpdate]]
- → Dependency: [[{DEL}CommodityFieldSetting]]
- → Dependency: [[{DEL}GetCommodityDataForUpdateResult]]

## 📊 Appears In (1 diagrams)

- Logical: GetCommodityDataForUpdate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityId | string |  |
| data | {DEL}CommodityDataValues |  |
| enabledForUpdate | {DEL}CommodityDataEnabledForUpdate |  |
| resultCode | {DEL}GetCommodityDataForUpdateResult |  |
| {ADD}commodityFiledSetting | CommodityFieldSetting |  |
