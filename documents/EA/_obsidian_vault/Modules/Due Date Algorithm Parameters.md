---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Logical Data Model"
domain: "Modules"
element_id: 1529970
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 Due Date Algorithm Parameters

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Logical Data Model

## 📝 Notes

Parameters for evaluation of First Due Date.
Default algorithm parameters are saved in a record where segment = 0.

## 🔗 Connections (5)

- → Association: [[Payment Channel Type]]
- → Dependency: [[{MOD}Employment]]
- → Dependency: [[Product Profile (Class 1879121)]]
- → Association: [[Bank (Class 1761500)]]
- → Dependency: [[First Due Date Algorithm Type]]

## 📊 Appears In (1 diagrams)

- Logical: Due date calculation parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Segment | string |  |
| PreferredAlgorithmMethod | First Due Date Algorithm Type |  |
| ProductProfile | Product Profile |  |
| DayShift | number |  |
| FastDueDate | boolean |  |
| DueDaysMap | text |  |
| EOMSpread | boolean |  |
| MinDaysAfterLoanProvidingDate | number |  |
| MaxDaysAfterLoanProvidingDate | number |  |
| MinDaysAfterPreferredDay | number |  |
| AddDeferredPeriodToResult | boolean |  |
| Active Flag | boolean |  |
