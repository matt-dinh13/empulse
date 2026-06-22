---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387663
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ChargeFeeRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Charging a fee to the account.

## 🔗 Connections (2)

- → Dependency «use»: [[FeeDto (Class 1819488)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: Account TransactionsWS - charge/cancel fee
- Logical: AccountTransactionWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| fees | FeeDto |  |
