---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1160753
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 PaymentProcessingNotificationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

Payment processing status structure

## 🔗 Connections (5)

- ← Dependency: [[ProcessUnpairedPaymentRequest]]
- ← Dependency: [[ProcessPairedPaymentRequest]]
- → Dependency: [[ProcessingStatusDto (Enumeration 1160770)]]
- ← Dependency: [[PairPaymentResponse (Class 1387650)]]
- ← Dependency: [[UnpairPaymentResponse (Class 1387647)]]

## 📊 Appears In (2 diagrams)

- Logical: AccountNotificationWS - Incoming payment processing
- Logical: AccountTransactionsWS - usage in incoming payment management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceTransactionId | TransactionSourceIdDto |  |
| status | ProcessingStatusDto |  |
| errorMessage | string |  |
