---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS"
domain: "Analysis Model"
element_id: 1592136
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS

## 📝 Notes

Entity holds information about payment.

## 🔗 Connections (2)

- ← Dependency «links to»: [[PairedPayment]]
- → Aggregation: [[GetInstallmentScheduleResponse]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentID | string |  |
| value | decimal |  |
| datePay | date |  |
| dateClient | date |  |
| typeName | string |  |
| creationDateTime | timestamp |  |
| typeCode | string |  |
