---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ArchiveCommodityData"
domain: "Modules"
element_id: 1746042
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}ResultDataArchive

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}ArchiveCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (2)

- → Dependency: [[{DEL}ResultCodeArchive]]
- ← Dependency: [[{DEL}ArchiveCommodityDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}ArchiveCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityId | string |  |
| resultCode | {DEL}ResultCodeArchive |  |
| description | string |  |
