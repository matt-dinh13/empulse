---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService"
domain: "Analysis Model"
element_id: 1157794
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 TransactionSourceIdDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService

## 📝 Notes

Transaction identification in the source system where the card transaction was originated.

## 🔗 Connections (4)

- ← Dependency: [[UnpairPaymentRequest]]
- ← Dependency: [[PaymentDto]]
- → Dependency: [[SourceSystemEnumDto]]
- ← Dependency: [[PaymentProcessingNotificationDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentPairingService - pair and unpari payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceSystem | SourceSystemEnumDto |  |
| sourceTxId | TransactionSourceCodeType |  |
