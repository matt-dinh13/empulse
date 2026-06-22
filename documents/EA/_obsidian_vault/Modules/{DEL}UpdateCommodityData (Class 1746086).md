---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}UpdateCommodityData"
domain: "Modules"
element_id: 1746086
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}UpdateCommodityData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}UpdateCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (4)

- → Dependency: [[{DEL}CommodityDataValues]]
- ← Dependency: [[{DEL}UpdateCommodityDataRequest]]
- → Dependency: [[{DEL}CommodityUpdateMode]]
- → Dependency: [[{DEL}CommodityDataValidationParameters]]

## 📊 Appears In (1 diagrams)

- Logical: UpdateCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityId | string |  |
| validationParameters | {DEL}CommodityDataValidationParameters |  |
| updateMode | {DEL}CommodityUpdateMode |  |
| values | {DEL}CommodityDataValues |  |
