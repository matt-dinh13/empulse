---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Marketing Offer"
domain: "Analysis Model"
element_id: 1170298
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PROD_OFR_LIMIT_COM_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Marketing Offer

## 📝 Notes

common data of limits of cross-sell offers (for existing clients) and bound offers (for prospect clients), which are used as parameters for product offer calculation

## 🔗 Connections (2)

- ← Aggregation: [[HOM_PROD_OFFER_LIMIT_001]]
- ← Aggregation: [[HOM_PROD_OFR_LIMIT2PRD_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product Offer Limit (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer name | string |  |
| campaign ID | string |  |
| campaign type | string |  |
| campaign sub type | string |  |
| valid from | date |  |
| valid to | date |  |
| product type | string |  |
| min cash payment amount | number |  |
| min cash payment currency | string |  |
| commodity type code | string |  |
| batch code | string |  |
| init transaction type | string |  |
| marketing action code | string |  |
