---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168389
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFFER_FIN_PAR_ITEM_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

The table keeps calculated items related to an offer as well as relation to item definition in specified table (e.g. fee definition in the Tariff)

## 🔗 Connections (3)

- ← Aggregation: [[HOM_OFR_FIN_PR_ITM2SBV_001]]
- → Aggregation: [[HOM_OFFER_FIN_PARAMS_001]]
- ← Aggregation: [[HOM_OFR_FPR_ITM2TF_ITM_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer financial parameters ID | number |  |
| item type | string |  |
| item amount | number |  |
| item amount currency | string |  |
| archived | boolean |  |
