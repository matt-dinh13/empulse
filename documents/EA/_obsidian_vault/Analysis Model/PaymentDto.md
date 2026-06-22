---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService"
domain: "Analysis Model"
element_id: 1157797
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/PaymentPairingService

## 📝 Notes

Incoming Payment structure

## 🔗 Connections (3)

- ← Dependency: [[PairPaymentRequest]]
- → Dependency: [[TransactionSourceIdDto (Class 1157794)]]
- → Dependency: [[PaymentTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentPairingService - pair and unpari payment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceTransactionId | TransactionSourceIdDto |  |
| amount | PositiveMoneyDto |  |
| contractCode | ContractCodeType |  |
| depositDate | date |  |
| transactionDate | date |  |
| attributes | AttributesDto |  |
| paymentType | PaymentTypeDto |  |
| paymentChannel | string |  |
