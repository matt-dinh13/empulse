---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Payments/Payments Extended Property/Logical Data Model"
domain: "Analysis Model"
element_id: 1758554
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 PAYM_Extended_Property_Group

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payments Extended Property/Logical Data Model

## 📝 Notes

Object representing a list of available PAYM extended property groups (i.e. PAYM domain's entity, which the individual extended properties are associated to).

## 🔗 Connections (5)

- ← Dependency: [[Outgoing Payment]]
- ← Association: [[PAYM_Extended_Property_Item]]
- ← Association: [[PAYM_Extended_Property_Value]]
- ← Dependency: [[DDM Draft]]
- ← Dependency: [[DDM (Class 1869699)]]

## 📊 Appears In (1 diagrams)

- Logical: PAYM Extended Properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| Description | string |  |
| Active Flag | boolean |  |
