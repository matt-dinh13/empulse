---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786518
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentScheduleDetail

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

{ADD CBL-15488 IS-1544}
Information from installment schedule detail

## 🔗 Connections (1)

- → Aggregation: [[GetDetailResponse]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| allInstallments | int |  |
| clientName | string |  |
| contractCode | string |  |
| contractStatus | string |  |
| contractType | string |  |
| currencyCode | string |  |
| currentVersion | int |  |
| dpdCurrent | int |  |
| dpdCurrentWithTolerance | int |  |
| dpdTolerance | decimal |  |
| fullyPaidInstallments | int |  |
| initialTransactionType | string |  |
| isDebit | boolean |  |
| nextInstallmentWithPPAmount | decimal |  |
| nextInstallmentWithAADueDate | date |  |
| numberOfVersions | int |  |
| numberOfAdvanceEMI | int |  |
| paymentChannelType | string |  |
| recalculatedAt | dateTime |  |
| recalculatedBy | string |  |
| recalculationReason | string |  |
| totalDeliquentAmount | decimal |  |
