---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Logical Data Model"
domain: "Analysis Model"
element_id: 1347799
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Pay-off Date Calculation Parameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Logical Data Model

## 📝 Notes

Value for Pay-off reason type

## 🔗 Connections (3)

- → Dependency: [[Pay-off Date Calculation Type]]
- → Dependency: [[Contract Status Transitions Reasons]]
- → Aggregation: [[{MOD}Terms And Conditions]]

## 📊 Appears In (1 diagrams)

- Logical: Pay-off installment date 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Pay-off reason | Contract Status Transitions Reasons |  |
| Pay-off Date | Pay-off Date Calculation Type |  |
| Default | boolean |  |
