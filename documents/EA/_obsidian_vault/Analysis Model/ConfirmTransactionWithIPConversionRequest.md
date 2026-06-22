---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1734237
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmTransactionWithIPConversionRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Confirm Transaction with transaction conversion to IP request

## 🔗 Connections (2)

- → Dependency: [[{MOD}ConfirmationTxDto]]
- ← Usage: [[AccountTransactionWS]]

## 📊 Appears In (1 diagrams)

- Logical: Account TransactionsWS - usage on REL transaction confirmation and IP conversion

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transaction | {MOD}ConfirmationTxDto |  |
| offerCode | TransactionTypeVariantTypeDto |  |
| loanCode | LoanCodeType |  |
