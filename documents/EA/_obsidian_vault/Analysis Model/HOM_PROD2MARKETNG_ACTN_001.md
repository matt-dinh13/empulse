---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371202
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PROD2MARKETNG_ACTN_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

List of marketing actions assigned to product

## 🔗 Connections (2)

- → Dependency: [[HOM_MARKETING_ACTION_001]]
- → Aggregation: [[HOM_PRODUCT_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| product ID | number |  |
| marketing action code | HOM_MARKETING_ACTION_001 |  |
