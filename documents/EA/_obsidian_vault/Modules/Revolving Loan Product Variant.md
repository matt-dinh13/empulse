---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Base Types/Logical Data Model"
domain: "Modules"
element_id: 1879122
diagrams: 4
connections: 5
tags:
  - class
  - modules
---

# 🔷 Revolving Loan Product Variant

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Base Types/Logical Data Model

## 📝 Notes

This class is specialization of class Product variant for Revolving loans. Intended for Products based on Product profiles with ProductType = REL.

## 🔗 Connections (5)

- ← Dependency «mapping»: [[{DEL}ProductVariantRELDataDto]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[Printout Template]]
- → Generalization: [[Product Variant (Class 1879099)]]

## 📊 Appears In (4 diagrams)

- Logical: Base Types
- Logical: Entities to be removed
- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Min Installment Base |  Base Type  |  |
| Min Installment Rate | Percentage |  |
| Min Installment Fixed Amount | Financial Amount |  |
| Min Installment Rounding | Rounding |  |
| Min Installment Rounding Scale | Rounding Scale Type |  |
| Installment Prescription Min Limit | Financial Amount |  |
| Statement Printout Template | Printout Template |  |
