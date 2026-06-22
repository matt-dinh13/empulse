---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3"
domain: "Analysis Model"
element_id: 1521813
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 UpdatePaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3

## 📝 Notes

id of a payment channel to update

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[{ADD}GeneralBankAccountDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelWSV3 - Update Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountId | long |  |
| generalBankAccountData | GeneralBankAccountDataDto |  |
| paymentChannelId | long |  |
| sourceType | {ADD}PaymentChannelSourceTypeDto |  |
