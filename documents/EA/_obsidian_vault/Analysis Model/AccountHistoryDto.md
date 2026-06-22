---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819498
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 AccountHistoryDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 🔗 Connections (1)

- → Generalization «XSDextension»: [[AccountDto (Class 1819446)]]

## 📊 Appears In (1 diagrams)

- Logical: Account management structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| minimalLedgerBalance | MoneyDto |  |
| maximalLedgerBalance | MoneyDto |  |
| numberOfDebitTransactionsCard | integer |  |
| numberOfDebitTransactionsWithdrawal | integer |  |
| numberOfDebitTransactionsTransfer | integer |  |
