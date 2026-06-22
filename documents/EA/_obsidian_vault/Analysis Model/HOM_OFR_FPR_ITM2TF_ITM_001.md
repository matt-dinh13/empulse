---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168396
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFR_FPR_ITM2TF_ITM_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

The table keeps an offer financial parameters item of the tariff item type (e.g. a fee). Dates and user ids of creator/last modifier is in parent table OFFER_FIN_PARAMETERS_ITEM.

## 🔗 Connections (2)

- → Dependency: [[HOM_TARIFF_ITEM_001]]
- → Aggregation: [[HOM_OFFER_FIN_PAR_ITEM_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariff item ID | HOM_TARIFF_ITEM_001 |  |
