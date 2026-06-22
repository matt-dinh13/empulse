---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786517
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

Entity holds basic information about installment

## 🔗 Connections (4)

- → Dependency: [[InstallmentItem (Class 1786520)]]
- → Aggregation: [[GetDetailResponse]]
- → Aggregation: [[GetInstallmentsResponse]]
- → Aggregation: [[GetNextInstallmentResponse (Class 1786506)]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDate | date |  |
| datePaid | date |  |
| chargingReason | string |  |
| installmentItems | installmentItem |  |
| lastPairingDateTime | timeStamp |  |
| name | string |  |
| numInstallment | decimal |  |
| value | decimal |  |
| valuePaid | decimal |  |
