---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371187
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_TARIFF_ITEM_TYPE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Each tariff item has to be based on tariff item type. This entity defines basic attributes of all fees/penalties created according this type

## 🔗 Connections (2)

- ← Dependency: [[HOM_TARIFF_ITEM_001]]
- ← Aggregation: [[HOM_TARF_ITM_TP2TP_FLG_001]]

## 📊 Appears In (1 diagrams)

- Logical: Tariff (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| category type | string |  |
| accounting represent type | string |  |
| usage type | string |  |
| print order | number |  |
| sort order | number |  |
| active flag | boolean |  |
| charging periodicity | string |  |
| effective date type | string |  |
