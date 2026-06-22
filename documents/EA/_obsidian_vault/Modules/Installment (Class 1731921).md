---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment schedule management/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1731921
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment schedule management/Analytical Model/Logical Data Model

## 🔗 Connections (4)

- → Aggregation: [[Installment Schedule (Class 1731923)]]
- → Dependency: [[Installment Type]]
- ← Aggregation: [[Installment Part]]
- → Dependency: [[Recalculation Reason]]

## 📊 Appears In (1 diagrams)

- Logical: Installment schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Installment Version | Number |  |
| Installment Number | Number |  |
| Due Date | Date |  |
| Customer Due Date | Date |  |
| Recalculation Reason | Recalculation Reaosn |  |
| Deactivated In Version | Number |  |
| Active | Boolean |  |
| Type | Installment Type |  |
| Charged To Installment | Number |  |
| Fully Paid With Tolerance | Date |  |
| Fully Paid Without Tolerance | Date |  |
| Creation Date | DateTime |  |
| Data Echange ID | UUID |  |
