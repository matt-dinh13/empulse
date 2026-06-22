---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1465326
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymnetChannelBankAccountDataFilterDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 🔗 Connections (2)

- → Dependency: [[PaymnetChannelTypeFilterDto]]
- ← Dependency: [[GetPaymentChannelByBankAccountDataRequest]]

## 📊 Appears In (3 diagrams)

- Logical: PaymentChannelWS - get payment channels by bank account data
- Logical: PaymentChannelWSV2 - Get Payment Channel By Bank Account
- Logical: PaymentChannelWSV3 - Get Payment Channel By Bank Account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| bankBranchSynchCode | string |  |
| paymentChannelTypeFilter | PaymnetChannelTypeFilterDto |  |
| onlyCurrentlyValid | boolean |  |
