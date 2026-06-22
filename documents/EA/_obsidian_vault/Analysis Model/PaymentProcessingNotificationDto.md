---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService"
domain: "Analysis Model"
element_id: 1157796
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentProcessingNotificationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService

## 📝 Notes

Payment processing status structure

## 🔗 Connections (3)

- ← Dependency: [[UnpairPaymentResponse]]
- → Dependency: [[TransactionSourceIdDto (Class 1157794)]]
- → Dependency: [[ProcessingStatusDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentPairingService - pair and unpari payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceTransactionId | TransactionSourceIdDto |  |
| status | ProcessingStatusDto |  |
| errorMessage | string |  |
