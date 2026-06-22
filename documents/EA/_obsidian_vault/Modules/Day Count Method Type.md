---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Logical Data Model"
domain: "Modules"
element_id: 1235090
diagrams: 4
connections: 4
tags:
  - enumeration
  - modules
---

# 📝 Day Count Method Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Logical Data Model

## 📝 Notes

Types of Day Count method for calculation of annuity and interest.
Defines algorithm for calculation of number of days between two dates:
Date1 (Y1, M1, D1)
Date2 (Y2, M2, D2)
and factor defining relation between annual and daily interest rate.

## 🔗 Connections (4)

- ← Dependency: [[RELIP Service]]
- ← Dependency: [[Installment Plan Scheme]]
- ← Dependency: [[ProductProfileInputDto]]
- ← Dependency: [[Product Profile (Class 1879121)]]

## 📊 Appears In (4 diagrams)

- Logical: Installment Plan Scheme
- Logical: Product Profile
- Logical: ProductProfileDto
- Logical: REL Installment Plan service - parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| M30_360 |  |  |
| ACT_ACT |  |  |
| ACT_365F |  |  |
| ACT_360 |  |  |
