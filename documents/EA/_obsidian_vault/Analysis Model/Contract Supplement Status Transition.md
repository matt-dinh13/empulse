---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model"
domain: "Analysis Model"
element_id: 1862940
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract Supplement Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Logical Domain Model

## 📝 Notes

Change of transitions in the supplement status.

## 🔗 Connections (3)

- → Dependency: [[Contract Supplement Status Type (Class 1862124)]]
- → Aggregation: [[Contract Supplement (Class 1862126)]]
- → Dependency: [[Contract Supplement Status Transitions Reason]]

## 📊 Appears In (3 diagrams)

- Logical: Card Balance Transfer Supplement - Logical Domain Model
- Logical: Contract Supplements
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Creation Date | DateTime |  |
| Reason | Contract Supplement Status Transitions Reason |  |
| Status | Contract Supplement Status Type |  |
