---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Commodity"
domain: "Analysis Model"
element_id: 1162583
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 HOM_COMMODITY_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Commodity

## 📝 Notes

Commodity client is getting loan for.

## 🔗 Connections (4)

- → Aggregation: [[HOM_COMMODITY_TYPE_001]]
- → Dependency: [[HOM_COLOR_001]]
- → Dependency: [[HOM_DELIVERY_TYPE_001]]
- → Dependency: [[HOM_MANUFACTURER_001]]

## 📊 Appears In (1 diagrams)

- Logical: Commodity (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodity type ID | number |  |
| contract ID | number |  |
| delivery type code | HOM_DELIVERY_TYPE_001 |  |
| name | string |  |
| color | HOM_COLOR_001 |  |
| model number | string |  |
| price amount | number |  |
| price currency | string |  |
| untaxed price amount | number |  |
| untaxed price currency | string |  |
| producer | string |  |
| serial number | string |  |
| engine number | string |  |
| unique number | number |  |
| archived | boolean |  |
| owneship book number | string |  |
| license plate number | string |  |
| vehicle registration number | string |  |
| vehicle registration expiration date | date |  |
| producer code | HOM_MANUFACTURER_001 |  |
| validated | boolean |  |
| sku | string |  |
| imei | string |  |
