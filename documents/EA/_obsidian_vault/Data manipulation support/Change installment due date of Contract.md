---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations"
domain: "Data manipulation support"
element_id: 1277911
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Change installment due date of Contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations

## 📝 Notes

This use case describes steps to regenerate a contract installment schedule with a new installment due date.
Keep in mind that all incoming payments paired with affected contract have to be unpaired at first.
This action only changes annuity day of the installment due date. The original month of each the installment due date stays unchanged. The provided annuity day can be only in range of 1st to 28th day of month.

## 🔗 Connections (1)

- → Dependency: [[OBS message mapping rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Other contract manipulations
