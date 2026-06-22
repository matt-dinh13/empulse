---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371204
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PAYMT_CARD_SERVICE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Defines specific parameters of service Payment Card

## 🔗 Connections (3)

- → Generalization: [[HOM_SERVICE_001]]
- → Dependency: [[HOM_BSL_EXT_CARD_TP_001]]
- → Dependency: [[HOM_BSL_EXT_CARD_TP_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service ID | number |  |
| instant card type code | HOM_BSL_EXT_CARD_TP_001 |  |
| personalized card allowed | boolean |  |
| postponed activation months | number |  |
| postponed activation offset | number |  |
| instant card allowed | boolean |  |
| personalized card type code | HOM_BSL_EXT_CARD_TP_001 |  |
| address delivery allowed | boolean |  |
| POS delivery allowed | boolean |  |
