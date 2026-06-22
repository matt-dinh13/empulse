---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779740
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreatePaymentChannelDraftRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3628}

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelRestAPI (Interface 1773140)]]
- → Dependency: [[bankAccountData (Class 1779744)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - Create Payment Channel Draft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | BankAccountData |  |
| contractCode | string |  |
| externalCardId | string |  |
| paymentPurpose | varchar |  |
| salesroomCode | string |  |
| sourceType | string |  |
| type | varchar |  |
| targetContract | string |  |
