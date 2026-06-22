---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/MTCACC"
domain: "Modules"
element_id: 1816869
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}Maintenance of financial account

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/MTCACC

## 📝 Notes

Service for move information from Product variant of REL product to new service

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{ADD}ServiceMTCACCData (Class 1452015)]]
- → Dependency: [[Accounting Method (Class 1879096)]]
- → Dependency: [[Billing day calculation method]]

## 📊 Appears In (2 diagrams)

- Logical: MTCACC
- Logical: Service MTCACC data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account Type | string |  |
| Min Installment Base | Min Installment Base |  |
| Min Installment Rate | Min Installment Rate |  |
| Min Installment Fixed Amount | Financial Amount |  |
| Min Installment Rounding | Rounding |  |
| Min Installment Rounding Scale | Rounding Scale Type |  |
| Installment Prescription Min Limit | Financial Amount |  |
| Credit Amount Min | Financial amount >= 0 |  |
| Credit Amount Max | Financial amount >= 0 |  |
| For Internal Client | boolean |  |
| Billing Day Calculation Method | Billing day calculation method |  |
| Due Day Offset | int |  |
| Fixed Due Day | int |  |
| Account Lifespan | int |  |
| {ADD}Accounting Method | Accounting Method |  |
