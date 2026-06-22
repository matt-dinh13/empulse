---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new"
domain: "Analysis Model"
element_id: 1878097
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairedPayment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new

## 📝 Notes

Entity holds information about relationship between installment parts and payments.

## 🔗 Connections (2)

- → Dependency «links to»: [[Payment (Class 1878081)]]
- ← Dependency: [[InstallmentItem (Class 1878080)]]

## 📊 Appears In (3 diagrams)

- Logical: InstallmentScheduleRestAPI v2 - Get Detail
- Logical: InstallmentScheduleRestAPI v2 - Get Installments
- Logical: InstallmentScheduleRestAPI v2 - Get Next Installment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentId | string |  |
| valuePaired | decimal |  |
