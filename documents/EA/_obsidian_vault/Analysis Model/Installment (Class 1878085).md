---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new"
domain: "Analysis Model"
element_id: 1878085
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new

## 📝 Notes

Entity holds basic information about installment

## 🔗 Connections (4)

- → Aggregation: [[GetDetailResponse (Class 1878091)]]
- → Aggregation: [[GetNextInstallmentResponse (Class 1878094)]]
- → Aggregation: [[GetInstallmentsResponse (Class 1878089)]]
- → Dependency: [[InstallmentItem (Class 1878080)]]

## 📊 Appears In (3 diagrams)

- Logical: InstallmentScheduleRestAPI v2 - Get Detail
- Logical: InstallmentScheduleRestAPI v2 - Get Installments
- Logical: InstallmentScheduleRestAPI v2 - Get Next Installment

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
| recalculationReason | string |  |
| {ADD}dpdWithoutTolerance | decimal |  |
| {ADD}dpdWithTolerance | decimal |  |
