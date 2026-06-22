---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1638511
diagrams: 7
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 TransactionSubTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Transaction sub type, e.g. type of goods purchased by this transaction.

## 🔗 Connections (4)

- ← Dependency: [[AccruedInterestMessageDto]]
- ← Dependency: [[AccountItemDto]]
- ← Dependency: [[{MOD}ConfirmationTxDto]]
- ← Dependency: [[Transaction Subtype]]

## 📊 Appears In (7 diagrams)

- Logical: Account management structures - Initial Transaction
- Logical: Account ManagementWS - Account items
- Logical: Account transaction - Logical data model
- Logical: Account UI - Interface diagram - Transactions
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: Accured Interest -  JMS messages
- Logical: COMMON for Cabus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| REG_INT |  |  |
| TW | string |  |
| UN_GP_INT |  |  |
| CD | string |  |
| CL | string |  |
| UNKNOWN | string |  |
| IP_INT | string |  |
