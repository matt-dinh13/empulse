---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Commodity"
domain: "Analysis Model"
element_id: 1162582
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_COMMODITY_TYPE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Commodity

## 📝 Notes

Database relation between Salesroom and Commodity id done through CommodityType.Code not through CommodityType.Id. It is because of possibility to create "the same" new Commodity without altering the relationship between all Salesrooms and "new" CommodityType. And why to create "new" CommodityType? Eg. because of change TaxRate.

## 🔗 Connections (2)

- ← Aggregation: [[HOM_COMMODITY_001]]
- → Aggregation: [[HOM_COMMODITY_CATEGORY_001]]

## 📊 Appears In (1 diagrams)

- Logical: Commodity (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| commodity category code | string |  |
| name | string |  |
| tax rate | number |  |
| security cheque required flag | boolean |  |
| is vehicle flag | boolean |  |
| active flag | boolean |  |
