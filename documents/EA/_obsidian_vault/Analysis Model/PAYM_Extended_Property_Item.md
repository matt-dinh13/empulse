---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Payments/Payments Extended Property/Logical Data Model"
domain: "Analysis Model"
element_id: 1758557
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PAYM_Extended_Property_Item

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payments Extended Property/Logical Data Model

## 📝 Notes

Object representing a list of available PAYM extended property items.

## 🔗 Connections (3)

- → Dependency: [[Logical Data Type]]
- ← Association: [[PAYM_Extended_Property_Value]]
- → Association: [[PAYM_Extended_Property_Group]]

## 📊 Appears In (1 diagrams)

- Logical: PAYM Extended Properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Extended Property Group Code | PAYM_Extended_Property_Group |  |
| Display Name | string |  |
| Logical Datatype Code | Logical Data Type |  |
| Description | string |  |
| Sort Order | number |  |
| Active Flag | boolean |  |
| Removable | boolean |  |
| Is Visible | boolean |  |
