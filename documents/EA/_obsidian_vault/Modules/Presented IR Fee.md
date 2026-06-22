---
type: Class
stereotype: "interface"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model"
domain: "Modules"
element_id: 1796339
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Presented IR Fee

> **Type**: Class · **Stereotype**: «interface»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model

## 📝 Notes

On input for PIR calculation it contains list of fees potentially involved in PIR calculation.

## 🔗 Connections (2)

- → Dependency: [[Tariff Item Type]]
- → Aggregation: [[Presented IR Parameters]]

## 📊 Appears In (1 diagrams)

- Logical: Presented interest rate - Interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Tariff Item Type |  |
| Amount | Financial Amount |  |
| Due Date | Date |  |
