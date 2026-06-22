---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819489
diagrams: 5
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 BaseTransactionDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Transaction definition as basic parent for all transactions (including authorization, payment).

## 🔗 Connections (3)

- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[TransactionTypeDto]]
- ← Generalization «XSDextension»: [[TransactionDto]]

## 📊 Appears In (5 diagrams)

- Logical: Account management structures
- Logical: Account management structures - Initial Transaction
- Logical: Account TransactionsWS - usage on REL transaction confirmation and IP conversion
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionAmount | PositiveMoneyDto |  |
| transactionDate | date |  |
| transactionType | TransactionTypeDto |  |
| sourceTransactionId | TransactionSourceIdDto |  |
