---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1869665
diagrams: 4
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 OutgoingPaymentResultCode

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3635}

## 🔗 Connections (4)

- ← Dependency: [[GetOutgoingPaymentResponse]]
- ← Dependency: [[CancelOutgoingPaymentResponse]]
- ← Dependency: [[GenerateOutgoingPaymentOrderResponse (Class 1869662)]]
- ← Dependency: [[CreateOutgoingPaymentResponse]]

## 📊 Appears In (4 diagrams)

- Logical: OutgoingPaymentRestAPI - Cancel Outgoing Payment
- Logical: OutgoingPaymentRestAPI - Create Outgoing Payment
- Logical: OutgoingPaymentRestAPI - GenerateOutgoingPaymentOrder
- Logical: OutgoingPaymentRestAPI - Get Outgoing Payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SUCCESS |  |  |
| CONTRACT_NOT_FOUND |  |  |
| PAYMENT_CHANNEL_NOT_FOUND |  |  |
| PAYMENT_TYPE_NOT_SUPPORTED |  |  |
| NO_PARAM_DEFINED |  |  |
| UNSUPPORTED_PARAMETER |  |  |
| IDENTIFYING_PARAMETER_MISSING |  |  |
| INCORRECT_PAYMENT_TYPE |  |  |
| INCORRECT_AMOUNT |  |  |
| NO_HC_BANK_ACCOUNT_FOUND |  |  |
| NO_OUTGOING_PAYMENT_FOUND |  |  |
| WRONG_OUTGOING_PAYMENT_STATUS |  |  |
| MULTIPLE_HC_BANK_ACCOUNTS_FOUND |  |  |
| PAYMENT_IN_WRONG_STATUS |  |  |
| RECIPIENT_NOT_DEFINED |  |  |
| TECHNICAL_ERROR |  |  |
