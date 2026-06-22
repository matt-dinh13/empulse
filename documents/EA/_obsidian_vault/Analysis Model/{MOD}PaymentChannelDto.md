---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3"
domain: "Analysis Model"
element_id: 1547550
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}PaymentChannelDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3

## 📝 Notes

{ADD}PAYM-2722{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}GetPaymentChannelResponse]]
- → Dependency: [[BankAccountDto (DataType 1587864)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelWSV3 - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankBranchSyncCode | string |  |
| {ADD}bankAccount | BankAccountDto |  |
| contractCode | string |  |
| CUID | string |  |
| dataExchangeId | string |  |
| externalCardId | string |  |
| id | long |  |
| lastChangeRequestStatus | string |  |
| purpose | string |  |
| recipientName | string |  |
| salesroomId | long |  |
| sourceType | string |  |
| targetBankAccountId | long |  |
| truncatedPAN | string |  |
| type | string |  |
| validFrom | date |  |
| validTo | date |  |
| {DEL}bankAccountId | long |  |
| {DEL}bankAccountNumber | string |  |
