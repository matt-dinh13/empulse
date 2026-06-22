---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model"
domain: "Analysis Model"
element_id: 530040
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Notice

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model

## 📝 Notes

Contains all information about notices for all partners and salesrooms. Notice can contain a free text and is limited only by length.

## 🔗 Connections (2)

- → Aggregation: [[Salesroom (Class 1556394)]]
- → Aggregation: [[{MOD}Partner]]

## 📊 Appears In (3 diagrams)

- Logical: Partner
- Logical: Salesroom
- Logical: SN Notice

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Text | Text |  |
| Type | Short text |  |
