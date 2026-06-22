---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4"
domain: "Analysis Model"
element_id: 1774722
diagrams: 3
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 PaymentChannelResultCode

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v4

## 📝 Notes

{ADD CBL-11254 PAYM-3628}

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelVerificationResponse]]
- ← Dependency: [[CretePaymentChannelDraftResponse]]

## 📊 Appears In (3 diagrams)

- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Verify Payment Channel
- Logical: PaymentChannelRestAPI - Verify Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SUCCESS |  |  |
| SALESROOM_NOT_FOUND |  |  |
| CONTRACT_NOT_FOUND |  |  |
| WRONG_PURPOSE_TYPE |  |  |
| EXTERNAL_CARD_NOT_FOUND |  |  |
| MISSING_ACCOUNT_NUMBER_AND_BANK_BRANCH_CODE |  |  |
| MISSING_INFORMATION_TO_CREATE_BANK_ACCOUNT |  |  |
| BANK_BRANCH_NOT_FOUND |  |  |
| MISSING_BAKN_ACCOUNT_TYPE |  |  |
| MISSING_ACCOUNT_HOLDER_NAME |  |  |
| NO_PARAM_DEFINED |  |  |
| UNSUPPORTED_PARAMETER |  |  |
| IDENTIFYING_PARAMETER_MISSING |  |  |
| INCORRECT_TYPE_USED_WITH_EXTERNAL_CARD |  |  |
| TYPE_NOT_FOUND |  |  |
| PAYMENT_CHANNEL_NOT_FOUND |  |  |
| WRONG_SOURCE_TYPE |  |  |
| INCORRECT_TYPE_TO_PURPOSE |  |  |
| INCORRECT_BANK_BRANCH_DATA |  |  |
| MISSING_BANK_BRANCH_SYNC_CODE |  |  |
| PURPOSE_TYPE_NOT_ALLOWED_FOR_UPDATE |  |  |
| SBA_OR_PBA_REQUIRES_SALESROOM_CODE |  |  |
| CA_REQUIRES_EXTERNAL_CARD |  |  |
| GBA_REQUIRES_BANK_ACCOUNT |  |  |
| BANK_NOT_SUPPORTED |  |  |
| NOT_VERIFIED |  |  |
| TECHNICAL_ERROR |  |  |
| PAYMENT_CHANNEL_VALIDATED |  |  |
