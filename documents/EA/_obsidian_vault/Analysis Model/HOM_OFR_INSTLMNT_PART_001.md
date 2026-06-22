---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168394
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFR_INSTLMNT_PART_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Installment part of offered installments.

## 🔗 Connections (2)

- → Dependency: [[HOM_TARIFF_ITEM_001]]
- → Aggregation: [[HOM_OFFER_INSTALLMENT_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer installment ID | number |  |
| tariff item ID | HOM_TARIFF_ITEM_001 |  |
| amount | number |  |
| amount currency | string |  |
| part type | string |  |
| archived | boolean |  |
