---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new"
domain: "Analysis Model"
element_id: 1878081
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Payment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new

## 📝 Notes

Entity holds information about payment.

## 🔗 Connections (3)

- ← Dependency «links to»: [[PairedPayment (Class 1878097)]]
- → Aggregation: [[GetDetailResponse (Class 1878091)]]
- → Aggregation: [[GetInstallmentsResponse (Class 1878089)]]

## 📊 Appears In (2 diagrams)

- Logical: InstallmentScheduleRestAPI v2 - Get Detail
- Logical: InstallmentScheduleRestAPI v2 - Get Installments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creationDateTime | timeStamp |  |
| dateClient | date |  |
| datePay | date |  |
| paymentDataExchangeID | string |  |
| typeCode | string |  |
| typeName | string |  |
| value | decimal |  |
| {ADD}sourceSystem | string |  |
