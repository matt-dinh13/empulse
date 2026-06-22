---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786505
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GetNextInstallment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

{ADD CBL-15488 IS-1544}
Get next installment for contract

## 🔗 Connections (1)

- ← Dependency: [[GetInstallmentSchedule]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| serchStartDate | date |  |
| nextUnpaidInstallment | boolean |  |
