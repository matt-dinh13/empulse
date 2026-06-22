---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387657
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ChargeFeeResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Charge fee response.

## 🔗 Connections (2)

- → Dependency: [[ChargeFeeStatusDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: Account TransactionsWS - charge/cancel fee
- Logical: AccountTransactionWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string[0..1) |  |
| resulCode | ChargeFeeStatusDto |  |
