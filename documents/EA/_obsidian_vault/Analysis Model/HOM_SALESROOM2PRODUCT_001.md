---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162918
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SALESROOM2PRODUCT_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

List of products assigned to salesroom

## 🔗 Connections (1)

- → Aggregation: [[HOM_SALESROOM_001]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroom ID | number |  |
| product code | string |  |
| valid from | date |  |
| archived | boolean |  |
| valid to | date |  |
