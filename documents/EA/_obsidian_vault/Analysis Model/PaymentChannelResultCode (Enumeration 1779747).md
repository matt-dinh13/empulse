---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779747
diagrams: 5
connections: 5
tags:
  - enumeration
  - analysis-model
---

# 📝 PaymentChannelResultCode

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3628}

## 🔗 Connections (5)

- ← Dependency: [[CreateAndValidatePaymentChannelResponse (Class 1779748)]]
- ← Dependency: [[UpdateAndValidatePaymentChannelResponse (Class 1779749)]]
- ← Dependency: [[PaymentChannelVerificationResponse (Class 1779751)]]
- ← Dependency: [[CreatePaymentChannelDraftResponse (Class 1779746)]]
- ← Dependency: [[GetPaymentChannelResponse (Class 1779736)]]

## 📊 Appears In (5 diagrams)

- Logical: PaymentChannelRestAPI - Create And Validate Payment Channel
- Logical: PaymentChannelRestAPI - Create Payment Channel Draft
- Logical: PaymentChannelRestAPI - Get Payment Channel
- Logical: PaymentChannelRestAPI - PaymentChannelVerification
- Use Case: PaymentChannelRestAPI - Update And Validate Payment Channel

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
