---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371186
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SUBVENTION_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

This class serves for definition of subvention for product. It defines attributes like subvention participant, percentage, fixed amount etc.

## 🔗 Connections (1)

- → Aggregation: [[HOM_PRODUCT_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| product ID | number |  |
| discount | boolean |  |
| rouding type | string |  |
| rouding scale | number |  |
| to client percentage | number |  |
| percentage | number |  |
| percentage type | string |  |
| participant type | string |  |
| fixed amount | number |  |
| fixed amount currency | string |  |
