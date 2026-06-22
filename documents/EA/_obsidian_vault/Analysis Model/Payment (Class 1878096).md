---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new"
domain: "Analysis Model"
element_id: 1878096
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new

## 🔗 Connections (2)

- → Aggregation: [[SimulateFERServiceResponse (Class 1878095)]]
- → Dependency: [[ItemToPay (Class 1878088)]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleRestAPI v2 - Simulate FER Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDate | string |  |
| errorDescription | string |  |
| itemsToPay | itemToPay |  |
| resultCode | string |  |
