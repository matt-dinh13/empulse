---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387661
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmTransactionRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Confirm Transaction request.

## 🔗 Connections (2)

- → Dependency: [[{MOD}ConfirmationTxDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactionWS
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transaction | {MOD}ConfirmationTxDto |  |
