---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1869666
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 GetValidRecipientBankAccountResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 🔗 Connections (5)

- ← Dependency: [[PaymentChannelRestAPI V3]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- → Dependency: [[OutgoingPaymentBankAccountData]]
- ← Dependency: [[OutgoingPaymentRestAPI (Interface 1869669)]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingPaymentRestAPI - Get Valid Recipient Bank Account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorCode | string |  |
| errorMessage | string |  |
| bankAccountData | OutgoingPaymentBankAccountData |  |
