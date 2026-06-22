---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Logical Data Model"
domain: "Analysis Model"
element_id: 1879267
diagrams: 4
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Supplement Process Setting

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Logical Data Model

## 📝 Notes

It defines some parameters related to the contract supplement status and used within a supplement processing

## 🔗 Connections (2)

- → Association: [[Contract Supplement Status Type (Class 1862124)]]
- → Aggregation: [[Supplement (Class 1879282)]]

## 📊 Appears In (4 diagrams)

- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Credit limit change
- Logical: Supplement definition for Loan restructuring

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CancelManuallyYN | boolean |  |
| GenerateNotificationYN | boolean |  |
| Duplicity Check Action | string |  |
| CancellationTimeout | int |  |
