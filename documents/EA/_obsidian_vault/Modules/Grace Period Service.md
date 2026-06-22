---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GRPER"
domain: "Modules"
element_id: 1151862
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 Grace Period Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GRPER

## 📝 Notes

This class defines specific parameters of service Grace Period.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[ServiceGRPERDataDto]]
- → Dependency: [[Early Repayment Algorithm Type]]
- ← Aggregation: [[Payment Discipline Parameters]]

## 📊 Appears In (2 diagrams)

- Logical: Grace Period - Setting
- Logical: Service GRPER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Length | Integer |  |
| Moratorium | Integer |  |
| Premium interest rate | Percent |  |
| Early Repayment Algorithm | Early Repayment Algorithm Type |  |
