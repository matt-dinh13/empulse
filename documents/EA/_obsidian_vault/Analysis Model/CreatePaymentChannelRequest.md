---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3"
domain: "Analysis Model"
element_id: 1521814
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreatePaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3

## 📝 Notes

payment purpose of the created payment channel

## 🔗 Connections (3)

- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[{ADD}GeneralBankAccountDataDto]]
- → Dependency: [[{ADD}PaymentPurposeTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelWSV3 - Create Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountID | long |  |
| contractCode | string |  |
| generalBankAccountData | {ADD}GeneralBankAccountDataDto |  |
| paymentPurpose | {ADD}PaymentPurposeTypeDto |  |
| salesroomCode | string |  |
| sourceType | {ADD}PaymentChannelSourceTypeDto |  |
