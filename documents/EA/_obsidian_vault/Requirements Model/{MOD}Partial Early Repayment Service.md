---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5124 CBL-28112 PER – Change the setup Minimal last installment amount and Disable PER service after the first successful execution"
domain: "Requirements Model"
element_id: 1869494
diagrams: 4
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Partial Early Repayment Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5124 CBL-28112 PER – Change the setup Minimal last installment amount and Disable PER service after the first successful execution

## 📝 Notes

The extension of Service entity which presents basic set of parameters for setting of Partial Early Repayment service

## 🔗 Connections (5)

- ← Dependency «mapping»: [[ServicePERDataDto]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[PER Type]]
- → Generalization: [[Service (Class 1880804)]]

## 📊 Appears In (4 diagrams)

- Custom: PCG-5124 CBL-28112
- Logical: Base Types
- Logical: Partial early repayment setting
- Logical: Service PER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Accepted Due Date Shift | int |  |
| Minimum Days Before ER | int |  |
| DPD Max Limit | Integer |  |
| Minimal PER Amount Rate | decimal |  |
| Moratorium | int |  |
| Allow Request In Moratorium | boolean |  |
| Minimal Last Installment Amount | Financial Amount |  |
| PER Type | PER Type |  |
| Allow PER Amount Interval | boolean |  |
| {ADD}Maximal number of usage | int |  |
| {ADD}Minimal remaining principal - fixed amount | int |  |
| {ADD}Minimal remaining principal - percentage base | {MOD}Base Type |  |
| {ADD}Minimal remaining principal - percentage | int |  |
