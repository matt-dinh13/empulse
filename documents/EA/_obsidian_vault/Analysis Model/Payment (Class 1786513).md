---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786513
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 🔗 Connections (2)

- → Dependency: [[ItemToPay]]
- → Aggregation: [[SimulateFERServiceResponse]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDate | string |  |
| errorDescription | string |  |
| itemsToPay | itemToPay |  |
| resultCode | string |  |
