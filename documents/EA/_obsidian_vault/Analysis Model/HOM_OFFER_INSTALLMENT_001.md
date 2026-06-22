---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator"
domain: "Analysis Model"
element_id: 1168395
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_OFFER_INSTALLMENT_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Calculator

## 📝 Notes

Installment which was offered to client before concrete installment schedule was chosen

## 🔗 Connections (2)

- → Aggregation: [[HOM_OFFER_FIN_PARAMS_001]]
- ← Aggregation: [[HOM_OFR_INSTLMNT_PART_001]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Financial Parameters (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offer financial parameters ID | number |  |
| installment number | number |  |
| due date | date |  |
| customer due date | date |  |
| archived | boolean |  |
| type | string |  |
| recalculation reason type | string |  |
