---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityData"
domain: "Modules"
element_id: 1746471
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultDataGet

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (3)

- ← Dependency: [[{DEL}GetCommodityDataResponse]]
- → Dependency: [[{DEL}CommodityDataValues]]
- → Dependency: [[{DEL}GetCommodityDataResult]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}GetCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| data | {DEL}CommodityDataValues |  |
| commodityId | string |  |
| resultCode | {DEL}GetCommodityDataResult |  |
| validationSkippable | boolean |  |
