---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model"
domain: "Modules"
element_id: 1879126
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Product Profile Installment Schedule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model

## 📝 Notes

This entity keeps list of installment schedule algorithm types allowed to the respective Product Profile

## 🔗 Connections (2)

- → Dependency: [[{MOD}Installment Schedule Method Type]]
- → Aggregation: [[Product Profile (Class 1879121)]]

## 📊 Appears In (1 diagrams)

- Logical: Product Profile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Installment Schedule Method | {MOD}Installment Schedule Method Type |  |
| Is Default | boolean |  |
