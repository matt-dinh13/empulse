---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786514
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairedPayment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

Entity holds information about relationship between installment parts and payments.

## 🔗 Connections (2)

- ← Dependency: [[InstallmentItem (Class 1786520)]]
- → Dependency «links to»: [[Payment (Class 1786507)]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentId | string |  |
| valuePaired | decimal |  |
