---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3"
domain: "Analysis Model"
element_id: 1774733
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CreatePaymentChannelDraftRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3

## 📝 Notes

{ADD CBL-11254 PAYM-3628}

## 🔗 Connections (4)

- ← Dependency: [[PaymentChannelRestAPI V3]]
- → Dependency: [[bankAccountData]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774737)]]

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
| externalVerificationResult | string |  |
