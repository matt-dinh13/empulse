---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1857185
diagrams: 2
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 Installment Included In Operation

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

It contains setting which determine if an installment part, which has due date after some date defined an operation with the Installment Schedule, is to be included into calculation used for the operation (e.g. Early repayment).
Including an Installment part and its Tariff Item type depends on current Terms and Conditions and operation type (Recalculation type).

## 🔗 Connections (5)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- → Association: [[{MOD}Terms And Conditions]]
- → Association: [[Tariff Item Type]]
- → Association: [[Recalculation Reason (Class 1833457)]]
- → Association: [[Installment Part Type (Class 1833460)]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Logical: Installment Schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| archived | boolean |  |
