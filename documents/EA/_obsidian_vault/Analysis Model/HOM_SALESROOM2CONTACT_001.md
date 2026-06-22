---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162920
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SALESROOM2CONTACT_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Contains all information about assignment of a salesroom to contact information.

## 🔗 Connections (2)

- → Aggregation: [[HOM_SALESROOM_001]]
- ← Aggregation: [[HOM_SALRM_CONT_PERSON_001]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroom ID | number |  |
| contact ID | number |  |
| archived | boolean |  |
