---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774890
diagrams: 6
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 bankAccountData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 📝 Notes

{ADD CBL-11254 PAYM-3628}

## 🔗 Connections (6)

- ← Dependency: [[CreatePaymentChannelDraftRequest (Class 1774739)]]
- ← Dependency: [[GetPaymentChannelRequest (Class 1774893)]]
- ← Dependency: [[UpdatePaymentChannelOrDraftRequest (Class 1774897)]]
- ← Dependency: [[UpdatePaymentChannelRequest (Class 1774895)]]
- ← Dependency: [[UpdateAndValidatePaymentChannelRequest (Class 1774901)]]
- ← Dependency: [[CreateAndValidatePaymentChanelRequest (Class 1774899)]]

## 📊 Appears In (6 diagrams)

- Logical: PaymentChannelRestAPI - Create and Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Logical: PaymentChannelRestAPI - Update and Validate Payment Channel
- Logical: PaymentChannelRestAPI - Update Payment Channel
- Logical: PaymentChannelRestAPI - Update Payment Channel or Draft

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
