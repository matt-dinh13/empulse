---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Marketing Offer"
domain: "Analysis Model"
element_id: 1170297
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PROD_OFFER_LIMIT_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Marketing Offer

## 📝 Notes

limits of cross-sell offers (for existing clients) and bound offers (for prospect clients), which are used as parameters for product offer calculation

## 🔗 Connections (2)

- → Aggregation: [[HOM_PROD_OFR_LIMIT_COM_001]]
- ← Aggregation: [[HOM_PROD_OFR_LIMIT2PRD_001]]

## 📊 Appears In (1 diagrams)

- Logical: Product Offer Limit (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | number |  |
| segment | string |  |
| max credit amount | number |  |
| max credit currency | string |  |
| max monthly installment amount | number |  |
| max monthly installment currency | string |  |
| product offer limit common ID | number |  |
| batch code | string |  |
