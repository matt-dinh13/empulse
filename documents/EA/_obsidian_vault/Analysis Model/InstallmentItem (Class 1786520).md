---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786520
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

Entity holds information about installment part.

## 🔗 Connections (2)

- ← Dependency: [[Installment (Class 1786517)]]
- → Dependency: [[PairedPayment (Class 1786514)]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

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
