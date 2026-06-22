---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162942
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SALESROOM_NOTICE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Contains all information about notices for all partners and salesrooms. Notice can contain a free text and is limited only by length.

## 🔗 Connections (1)

- → Aggregation: [[HOM_SALESROOM_001]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroom ID | number |  |
| notice type | string |  |
| archived | boolean |  |
| text | string |  |
