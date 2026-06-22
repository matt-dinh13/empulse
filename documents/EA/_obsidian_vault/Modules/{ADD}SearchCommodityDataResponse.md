---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}SearchCommodityData"
domain: "Modules"
element_id: 1746045
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}SearchCommodityDataResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}SearchCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (3)

- → Dependency: [[{ADD}ResultCodeSearch]]
- → Dependency: [[{ADD}SearchCommodityDataResult]]
- ← Dependency: [[{DEL}CommodityWS]]

## 📊 Appears In (1 diagrams)

- Logical: SearchCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityData | {ADD}SearchCommodityDataResult |  |
| resultCode | {ADD}ResultCodeSearch |  |
| description | string |  |
