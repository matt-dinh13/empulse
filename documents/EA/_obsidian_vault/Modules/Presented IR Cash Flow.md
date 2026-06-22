---
type: Class
stereotype: "interface"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model"
domain: "Modules"
element_id: 1796341
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Presented IR Cash Flow

> **Type**: Class · **Stereotype**: «interface»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Logical Data Model

## 📝 Notes

On input for PIR calculation it contains list of annuities (principal + interest).
Before start of PIR calculation it is replenished by withdrawal, regular monthly fees and irregular fees.

## 🔗 Connections (1)

- → Aggregation: [[Presented IR Parameters]]

## 📊 Appears In (1 diagrams)

- Logical: Presented interest rate - Interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Date | date |  |
| Amount | Financial Amount |  |
| Order | int |  |
