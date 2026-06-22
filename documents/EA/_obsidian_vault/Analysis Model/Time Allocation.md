---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model"
domain: "Analysis Model"
element_id: 1857182
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Time Allocation

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model

## 📝 Notes

The entity keeps time allocation of specified fees involved in principal (see TariffItemType where Is Flag on Tariff Item Type (USE_CURR_TARIFF_VERSION") = true). Type of fee allocation is defined in the Tariff Item Type.Accounting representation

## 🔗 Connections (2)

- → Association: [[Tariff Item Type]]
- → Aggregation: [[Financial Parameter Item]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Accounting part version | Number |  |
| Amount | Financial amount |  |
| Creation Date | DateTime |  |
| Due date | Date |  |
