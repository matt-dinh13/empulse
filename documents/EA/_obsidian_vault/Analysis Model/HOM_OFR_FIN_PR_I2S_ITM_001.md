---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168386
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFR_FIN_PR_I2S_ITM_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

The table keeps an offer financial parameters item of the service item type (e.g. insurance). Dates and user ids of creator/last modifier is in parent table OFFER_FIN_PARAMETERS_ITEM.

## 🔗 Connections (2)

- → Dependency: [[HOM_TARIFF_ITEM_001]]
- → Aggregation: [[HOM_OFFER_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariff item ID | HOM_TARIFF_ITEM_001 |  |
| offer service ID | number |  |
