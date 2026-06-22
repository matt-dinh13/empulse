---
type: Interface
stereotype: "resource"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute"
domain: "Requirements Model"
element_id: 1763826
diagrams: 7
connections: 17
tags:
  - interface
  - requirements-model
---

# 🔶 TransactionSupplements_v2

> **Type**: Interface · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17318 (CSI-1688) BNPL - Use Merchant in transaction attribute

## 📝 Notes

transaction-supplement resource definition

## 🔗 Connections (17)

- → Dependency: [[13.116 Add Sales Quote to Transaction Supplement (UseCase 1881439)]]
- → Dependency: [[13.106 Get Transaction Supplement detail service]]
- → Usage: [[AuthorizeTransactions]]
- → Usage: [[CancelTransactionSupplement]]
- → Dependency: [[13.124 Reject Transaction supplement service]]
- → Usage: [[TransactionSupplement_v2]]
- → Usage: [[RejectTransactionSupplement]]
- → Usage: [[TransactionSupplement_v2]]
- → Usage: [[TransactionSupplement_v2]]
- → Usage: [[{MOD}CreateTransactionSupplement_v2x]]
- → Dependency: [[{MOD}13.100 Create Transaction Supplement service]]
- → Usage: [[TransactionSupplement_v2]]
- → Dependency «import»: [[GetTransactionSupplement]]
- → Usage: [[CreateTransactionSupplement_v2]]
- → Dependency: [[13.104 Cancel Transaction Supplement service]]
- → Dependency: [[13.118 Authorize transactions in Transaction Supplement (UseCase 1881427)]]
- → Usage: [[AddSalesQuoteToTransactionSupplement]]

## 📊 Appears In (7 diagrams)

- Logical: BNPL - Create Transaction Supplement
- Logical: Transaction Supplement - Cancel Transaction Supplement v2
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Logical: Transaction Supplement - Get Transaction Supplement v2
- Logical: TransactionSupplements - Add Sales Quote to Transaction Supplement
- Logical: TransactionSupplements - Authorize transactions in Transaction Supplement
- Logical: TransactionSupplements - Reject Transaction Suplement v2
