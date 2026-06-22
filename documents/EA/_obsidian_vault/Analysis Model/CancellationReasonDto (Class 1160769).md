---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1160769
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancellationReasonDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

List of cancellation reasons of transactions

## 🔗 Connections (2)

- ← Dependency: [[CancelTransactionRequest]]
- ← Dependency: [[AccountItemSearchDto (Class 1611763)]]

## 📊 Appears In (3 diagrams)

- Logical: Account ManagementWS - Account items
- Logical: Account UI - Interface diagram - Transactions
- Logical: AccountTransactions - usage at transaction cancellation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| REVERSAL |  |  |
| CHARGE_BACK |  |  |
| MANUAL |  |  |
| RECALCULATION |  |  |
| CONTRACT_CANCEL |  |  |
| EXPIRATION |  |  |
| ADJUSTMENT |  |  |
