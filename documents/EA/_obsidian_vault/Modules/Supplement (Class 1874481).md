---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model"
domain: "Modules"
element_id: 1874481
diagrams: 3
connections: 8
tags:
  - class
  - modules
---

# 🔷 Supplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model

## 📝 Notes

The abstract entity to keep definition of a supplement type.
Changes in the supplement definition will be versioned. It means respective supplement object refers to the supplement type based on which is created.

## 🔗 Connections (8)

- ← Association: [[Contract Supplement (Class 1874463)]]
- ← Aggregation: [[Supplement Document Type]]
- ← Aggregation: [[Supplement Process Setting]]
- → Association: [[Supplement Type (Enumeration 1874545)]]
- ← Generalization: [[Transaction Supplement (Class 1874538)]]
- ← Aggregation: [[Supplement To Required Document Container]]
- ← Aggregation: [[Evaluation Request Definition]]
- → Generalization: [[Supplement Versioned entity]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Supplement - Logical Data Model
- Logical: Supplement definition - Logical Data Model
- Logical: Supplement versioned entity - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| UUID | string |  |
