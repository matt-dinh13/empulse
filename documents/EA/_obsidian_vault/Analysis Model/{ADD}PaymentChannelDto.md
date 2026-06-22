---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1465334
diagrams: 5
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PaymentChannelDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD PAYM-580 /}

## 🔗 Connections (2)

- ← Dependency: [[{ADD}GetPaymentChannelResponse]]
- ← Dependency: [[GetPaymentChannelByBankAccountDataResponse]]

## 📊 Appears In (5 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWS - get payment channels by bank account data
- Logical: PaymentChannelWSV2 - Get Payment Channel
- Logical: PaymentChannelWSV2 - Get Payment Channel By Bank Account
- Logical: PaymentChannelWSV3 - Get Payment Channel By Bank Account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalCardId | string |  |
| truncatedPAN | string |  |
| bankAccountNumber | string |  |
| {DEL}bankCode | string |  |
| recipientName | string |  |
| lastChangeRequestStatus | string |  |
| purpose | string |  |
| sourceType | string |  |
| type | string |  |
| validFrom | date |  |
| validTo | date |  |
| bankAccountId | long |  |
| targetBankAccountId | long |  |
| contractCode | string |  |
| salesroomId | long |  |
| id | long |  |
| dataExchangeId | string |  |
| CUID | string |  |
| {ADD}bankBranchSyncCode | string |  |
