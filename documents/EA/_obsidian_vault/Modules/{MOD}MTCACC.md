---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model/Service Type/MTCACC"
domain: "Modules"
element_id: 1841618
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 {MOD}MTCACC

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model/Service Type/MTCACC

## 📝 Notes

Maintenance of financial account

## 🔗 Connections (6)

- → Dependency: [[Rounding Scale Type]]
- → Dependency: [[Billing day calculation method]]
- → Dependency: [[Accounting Method (Class 1879096)]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Aggregation: [[Service Parameter Type (Class 1846082)]]

## 📊 Appears In (2 diagrams)

- Logical: MTCACC
- Logical: Service Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account type | string |  |
| Min Installment base | {MOD}Base Type |  |
| Min Installment Rate | int |  |
| Min Installment Fixed Amount | int |  |
| Min Installment Rounding | Rounding |  |
| Min Installment Rounding Scale | Rounding Scale Type |  |
| Installment Prescription Min Limit | int |  |
| Credit Amount Min | int |  |
| Credit Amount Max | int |  |
| For Internal Client | boolean |  |
| Billing Day Calculation Method | Billing day calculation method |  |
| Due Day Offset | int |  |
| Fixed Due Day | int |  |
| Account Lifespan | int |  |
| {ADD}Accounting Method | Accounting Method |  |
| {ADD}Currency | string |  |
