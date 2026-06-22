---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1869659
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GenerateOutgoingPaymentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentRestAPI (Interface 1869669)]]
- → Dependency: [[OutgoingPaymentTypeDto]]
- → Dependency: [[{ADD}GeneralBankAccountDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingPaymentRestAPI - GenerateOutgoingPaymentOrder

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | moneyAmountType |  |
| contractCode | string |  |
| hcBankAccount | GeneralBankAccountDataDto |  |
| outgoingPaymentType | string |  |
