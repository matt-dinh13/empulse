---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/PAYHOL"
domain: "Modules"
element_id: 1666783
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}Payment Holiday Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/PAYHOL

## 📝 Notes

This class defines specific parameters of service Payment Holiday.

## 🔗 Connections (2)

- ← Dependency «mapping»: [[ServicePAYHOLDataDto]]
- → Dependency: [[{MOD}Bonus Services Impact Type]]

## 📊 Appears In (2 diagrams)

- Logical: Payment Holidays - Settting
- Logical: Service PAYHOL Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Bonus Services Impact | {MOD}Bonus Services Impact Type |  |
| Min Days Before Installment | Integer |  |
| Accept Small Underpayment | Boolean | FALSE |
| Expiration Period Days | Integer |  |
| Max Number Of Deferred Periods | Integer |  |
| {DEL}Interest calculation | Boolean |  |
| {DEL}Interest accrual calculation | Boolean |  |
