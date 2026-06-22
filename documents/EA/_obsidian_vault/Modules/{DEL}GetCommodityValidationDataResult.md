---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationData"
domain: "Modules"
element_id: 1746896
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {DEL}GetCommodityValidationDataResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (3)

- → Dependency: [[{DEL}CommodityValidationData]]
- → Dependency: [[{DEL}ResultCodeGetCommodityValidationData]]
- ← Dependency: [[{DEL}GetCommodityValidationDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetCommodityValidationData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| commodityValidationData | {DEL}CommodityValidationData |  |
| resultCode | {DEL}ResultCodeGetCommodityValidationData |  |
| description | string |  |
