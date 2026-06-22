---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1638519
diagrams: 3
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 TerminalTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Card terminal type where the transaction was executed (e.g. transactions without card present).

## 🔗 Connections (1)

- ← Dependency: [[TxTerminalInfoDto]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant
- Logical: COMMON for Cabus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CARD_PRESENT | string |  |
| ONLINE | string |  |
