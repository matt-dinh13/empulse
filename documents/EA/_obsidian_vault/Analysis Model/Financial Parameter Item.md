---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879599
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Financial Parameter Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

The entity keeps calculated items of specified types related to the contract financial parameters.
These items can be used by other functions of the system (e.g. calculates fees are used for the installment schedule generating at the moment of the contract signature event).

## 🔗 Connections (6)

- ← Aggregation: [[Time Allocation]]
- → Association: [[Financial Parameter Item Type]]
- ← Generalization: [[{ADD}FP Discount Item]]
- ← Generalization: [[{MOD}FP Tariff Item]]
- ← Generalization: [[FP Subvention Item]]
- → Aggregation: [[Financial Parameters (Class 1879562)]]

## 📊 Appears In (3 diagrams)

- Logical: Contract - Financial parameters
- Logical: Contract - Services
- Logical: Installment Schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Item Amount | Financial Amount |  |
| dataExchangeId | string |  |
