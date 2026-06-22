---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502817
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}UpdatePaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD PAYM-580 /}

## 🔗 Connections (4)

- → Dependency: [[{ADD}GeneralBankAccountDataDto]]
- → Dependency: [[{ADD}PaymentChannelSourceTypeDto]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]
- ← Dependency: [[PaymentChannelWS (Interface 1502835)]]

## 📊 Appears In (2 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Update Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentChannelId | long |  |
| bankAccountId | long |  |
| generalBankAccountData | GeneralBankAccountDataDto |  |
