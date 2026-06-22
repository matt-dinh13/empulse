---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162927
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PARTNER2PERSON_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Contains all information about assignment of a partner to contact person.

## 🔗 Connections (3)

- → Dependency: [[HOM_PARTNER_PERSON_TP_001]]
- ← Aggregation: [[HOM_PARTNR_CONT_PERSON_001]]
- → Aggregation: [[HOM_PARTNER_001]]

## 📊 Appears In (1 diagrams)

- Logical: Partner (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| partner ID | number |  |
| person ID | number |  |
| archived | boolean |  |
| partner person type code | HOM_PARTNER_PERSON_TP_001 |  |
| registration date | date |  |
