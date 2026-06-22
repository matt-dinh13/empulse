---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}CreateCommodityData"
domain: "Modules"
element_id: 1746070
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultDataCreate

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}CreateCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (2)

- → Dependency: [[{DEL}ResultCodeCreate]]
- ← Dependency: [[{DEL}CreateCommodityDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: CreateCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| commodityId | string |  |
| resultCode | {DEL}ResultCodeCreate |  |
| description | string |  |
