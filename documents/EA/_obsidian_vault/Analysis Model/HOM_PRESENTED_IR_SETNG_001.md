---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168392
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PRESENTED_IR_SETNG_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Settings for calculation of different types of presented interest rates

## 🔗 Connections (1)

- ← Dependency: [[HOM_OFFER_PIR_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| valid from | date |  |
| valid to | date |  |
| PIR type | string |  |
| display name | string |  |
| print name | string |  |
| sort order | number |  |
| display in offer | boolean |  |
| display in contract | boolean |  |
| display in printout | boolean |  |
| rounding | string |  |
| rounding scale | number |  |
| product type | string |  |
| PIR case | string |  |
