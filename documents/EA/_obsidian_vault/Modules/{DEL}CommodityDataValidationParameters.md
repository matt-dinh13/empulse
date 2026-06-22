---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ValidateCommodityData"
domain: "Modules"
element_id: 1746117
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {DEL}CommodityDataValidationParameters

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ValidateCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (3)

- ← Dependency: [[{DEL}UpdateCommodityData (Class 1746086)]]
- ← Dependency: [[{DEL}ValidateCommodityData (Class 1746061)]]
- → Dependency: [[{DEL}CommodityEventType]]

## 📊 Appears In (2 diagrams)

- Logical: {DEL}ValidateCommodityData
- Logical: UpdateCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | {DEL}CommodityEventType |  |
| insuranceServiceCode | string |  |
| productCode | string |  |
| financingPackageCode | string |  |
