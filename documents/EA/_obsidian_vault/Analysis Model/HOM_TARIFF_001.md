---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371203
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 HOM_TARIFF_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Tariff defines fees and penalties for product (and therefore for contracts based on this product)

## 🔗 Connections (4)

- → Dependency: [[HOM_TARIFF_TYPE_001]]
- ← Dependency: [[HOM_PRODUCT_001]]
- ← Dependency: [[HOM_SERVICE_001]]
- ← Aggregation: [[HOM_TARIFF_ITEM_001]]

## 📊 Appears In (3 diagrams)

- Logical: Product (DWH Interface)
- Logical: Service (DWH Interface)
- Logical: Tariff (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| tariff type code | HOM_TARIFF_TYPE_001 |  |
| currency code | string |  |
| active flag | boolean |  |
