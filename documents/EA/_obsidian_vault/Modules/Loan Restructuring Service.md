---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/LRES"
domain: "Modules"
element_id: 1530459
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 Loan Restructuring Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/LRES

## 📝 Notes

This class defines specific parameters of Loan Restructuring service.

## 🔗 Connections (2)

- ← Dependency «mapping»: [[ServiceLRESDataDto]]
- → Dependency: [[{MOD}Bonus Services Impact Type]]

## 📊 Appears In (2 diagrams)

- Logical: Loan Restructuring - Setting
- Logical: Service LRES Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Bonus Services Impact | {MOD}Bonus Services Impact Type |  |
| Expiration Period Days | Integer |  |
| Accept Small Underpayment | Boolean | FALSE |
| Min Days Before Installment | Integer |  |
| {ADD}Keep Installment Amount | boolean |  |
