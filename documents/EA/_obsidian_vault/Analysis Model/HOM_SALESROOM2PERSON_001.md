---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162922
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SALESROOM2PERSON_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Contains all information about assignment of a salesroom to contact person.

## 🔗 Connections (3)

- → Dependency: [[HOM_SALRM_PERSON_TYPE_001]]
- → Aggregation: [[HOM_SALESROOM_001]]
- ← Aggregation: [[HOM_SALRM_CONT_PERSON_001]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| person ID | number |  |
| salesroom ID | number |  |
| archived | boolean |  |
| salesroom person type code | HOM_SALRM_PERSON_TYPE_001 |  |
| registration date | date |  |
