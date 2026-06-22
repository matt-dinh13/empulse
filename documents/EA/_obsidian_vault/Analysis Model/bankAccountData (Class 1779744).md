---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779744
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 bankAccountData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3628}

## 🔗 Connections (4)

- ← Dependency: [[UpdateAndValidatePaymentChannelRequest (Class 1779750)]]
- ← Dependency: [[UpdatePaymentChannelRequest (Class 1779742)]]
- ← Dependency: [[CreatePaymentChannelDraftRequest (Class 1779740)]]
- ← Dependency: [[CreateAndValidatePaymentChanelRequest (Class 1779739)]]

## 📊 Appears In (4 diagrams)

- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Update Payment Channel
- Use Case: PaymentChannelRestAPI - Update And Validate Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountHolderName | string |  |
| accountNumber | string |  |
| bankAccountType | Bank account type |  |
| bankBranchCode | string |  |
| bankBranchSyncCode | string |  |
| bankCode | string |  |
| bankName | string |  |
