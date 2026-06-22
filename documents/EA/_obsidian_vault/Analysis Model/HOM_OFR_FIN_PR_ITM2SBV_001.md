---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168391
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFR_FIN_PR_ITM2SBV_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

The table keeps an offer financial parameters item of the subvention type. Dates and user ids of creator/last modifier is in parent table OFFER_FIN_PARAMETERS_ITEM.

## 🔗 Connections (1)

- → Aggregation: [[HOM_OFFER_FIN_PAR_ITEM_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| subvention ID | number |  |
| charged to client amount | number |  |
| charged to client amount currency | string |  |
