---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502809
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CreatePaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD PAYM-580 /}

## 🔗 Connections (5)

- → Dependency: [[OutgoingPaymentTypeDto]]
- → Dependency: [[{ADD}GeneralBankAccountDataDto]]
- → Dependency: [[{ADD}PaymentPurposeTypeDto]]
- → Dependency: [[{ADD}PaymentChannelSourceTypeDto]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]

## 📊 Appears In (2 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Create Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| bankAccountId | long |  |
| paymentPurpose | PaymentPurposeTypeDto |  |
| generalBankAccountData | GeneralBankAccountDataDto |  |
| salesroomCode | string |  |
