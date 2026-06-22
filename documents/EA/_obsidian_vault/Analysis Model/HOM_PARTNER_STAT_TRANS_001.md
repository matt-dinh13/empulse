---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162936
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PARTNER_STAT_TRANS_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Contains all information about changes of partner's status.

## 🔗 Connections (3)

- → Association: [[HOM_PARTNER_STAT_TRANS_001]]
- ← Association: [[HOM_PARTNER_STAT_TRANS_001]]
- ← Association: [[HOM_PARTNER_001]]

## 📊 Appears In (1 diagrams)

- Logical: Partner (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| previous trans ID | number |  |
| partner ID | number |  |
| status | string |  |
| reason | string |  |
