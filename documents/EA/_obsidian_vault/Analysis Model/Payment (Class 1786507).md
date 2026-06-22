---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786507
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

Entity holds information about payment.

## 🔗 Connections (3)

- ← Dependency «links to»: [[PairedPayment (Class 1786514)]]
- → Aggregation: [[GetInstallmentsResponse]]
- → Aggregation: [[GetDetailResponse]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creationDateTime | timeStamp |  |
| dateClient | date |  |
| datePay | date |  |
| paymentID | string |  |
| typeCode | string |  |
| typeName | string |  |
| value | decimal |  |
