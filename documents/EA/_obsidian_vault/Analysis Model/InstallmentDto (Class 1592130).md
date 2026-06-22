---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS"
domain: "Analysis Model"
element_id: 1592130
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS

## 📝 Notes

Entity holds basic information about installment

## 🔗 Connections (3)

- → Aggregation: [[GetInstallmentScheduleResponse]]
- → Aggregation: [[GetNextInstallmentResponse]]
- → Dependency: [[InstallmentItem]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| numInstallment | decimal |  |
| dateDue | date |  |
| value | decimal |  |
| valuePaid | decimal |  |
| datePaid | date |  |
| name | string |  |
| items | InstallmentItem |  |
| lastPairingDateTime | timeStamp |  |
| chargingReason | string |  |
