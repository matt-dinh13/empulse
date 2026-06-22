---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS"
domain: "Analysis Model"
element_id: 1423349
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GiftPaymentAmountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS

## 📝 Notes

A structure of request for expected gift payment amount for a given contract and recalculation reason.

## 🔗 Connections (2)

- ← Dependency: [[InstallmentServiceWS (Interface 1414296)]]
- → Dependency: [[Recalculation Reason (Class 1833457)]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentServiceWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| recalculationReason | RecalculationReason |  |
