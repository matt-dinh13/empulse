---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/COMMON for Fees and Penalties/Logical Data Model"
domain: "Analysis Model"
element_id: 1835856
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Excluded Fees Base

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/COMMON for Fees and Penalties/Logical Data Model

## 📝 Notes

This entity keeps setting list of fees (Tariff Item Type) which are to be excluded from base for a penalty calculation

## 🔗 Connections (2)

- → Dependency: [[Tariff Item Type]]
- → Dependency: [[Tariff Item Type]]

## 📊 Appears In (1 diagrams)

- Logical: Fees excluded from percentage base calculation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Calculated Fee | Tariff Item Type |  |
| Excluded Fee | Tariff Item Type |  |
| Active Flag | boolean |  |
