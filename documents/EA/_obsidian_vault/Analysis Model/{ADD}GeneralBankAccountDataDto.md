---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1465328
diagrams: 6
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}GeneralBankAccountDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 📝 Notes

{ADD PAYM-580 /}

## 🔗 Connections (6)

- ← Dependency: [[{ADD}UpdatePaymentChannelRequest]]
- ← Dependency: [[{ADD}CreatePaymentChannelRequest]]
- ← Dependency: [[CreatePaymentChannelRequest]]
- ← Dependency: [[UpdatePaymentChannelRequest]]
- ← Dependency: [[GenerateOutgoingPaymentOrderRequest]]
- ← Dependency: [[GenerateOutgoingPaymentRequest]]

## 📊 Appears In (6 diagrams)

- Logical: OutgoingPaymentRestAPI - GenerateOutgoingPaymentOrder
- Logical: OutgoingPaymentsWS - generateOutgoingPaymentOrder
- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Create Payment Channel
- Logical: PaymentChannelWSV3 - Create Payment Channel
- Logical: PaymentChannelWSV3 - Update Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| bankCode | string |  |
| bankBranchCode | string |  |
| accountHolderName | string |  |
