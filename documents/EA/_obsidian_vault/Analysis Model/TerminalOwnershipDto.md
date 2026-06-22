---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1819479
diagrams: 2
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 TerminalOwnershipDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Card terminal owner type - where the transaction was executed: terminal belongs to our bank, partner bank or any other institution.

## 🔗 Connections (1)

- ← Dependency: [[TxTerminalInfoDto]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OUR |  |  |
| PARTNER |  |  |
| OTHER |  |  |
