---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new"
domain: "Analysis Model"
element_id: 1878080
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new

## 📝 Notes

Entity holds information about installment part.

## 🔗 Connections (2)

- → Dependency: [[PairedPayment (Class 1878097)]]
- ← Dependency: [[Installment (Class 1878085)]]

## 📊 Appears In (3 diagrams)

- Logical: InstallmentScheduleRestAPI v2 - Get Detail
- Logical: InstallmentScheduleRestAPI v2 - Get Installments
- Logical: InstallmentScheduleRestAPI v2 - Get Next Installment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| datePaid | date |  |
| lastPairingDateTime | timeStamp |  |
| payments | pairedPayment |  |
| tariffItemTypeCode | string |  |
| typeCode | string |  |
| typeName | string |  |
| value | decimal |  |
| valuePaid | decimal |  |
| {ADD}installmentDataExchangeID | string |  |
