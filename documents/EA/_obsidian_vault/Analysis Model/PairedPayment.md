---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS"
domain: "Analysis Model"
element_id: 1592137
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PairedPayment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS

## 📝 Notes

Entity holds information about relationship between installment parts and payments.

## 🔗 Connections (2)

- ← Dependency: [[InstallmentItem]]
- → Dependency «links to»: [[PaymentDto (Class 1592136)]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| valuePaired | decimal |  |
| paymentId | string |  |
