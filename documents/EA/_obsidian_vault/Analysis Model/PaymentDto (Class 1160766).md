---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1160766
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 PaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Incoming Payment structure

## 🔗 Connections (5)

- → Dependency: [[AttributesDto (Class 1611776)]]
- → Dependency: [[TransactionTypeDto]]
- → Dependency: [[PaymentTypeDto (Enumeration 1160754)]]
- ← Dependency: [[PairPaymentRequest (Class 1387639)]]
- ← Dependency: [[PairPaymentBatchRequest]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactionsWS - usage in incoming payment management
- Logical: Generated JMS messages - Pair payment batch
- Logical: Types

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
