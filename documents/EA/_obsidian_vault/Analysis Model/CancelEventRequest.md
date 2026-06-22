---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387659
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CancelEventRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (3)

- → Dependency: [[CalcellationReasonDto]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionWS
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| event | TransactionSourceIdDto |  |
| reason | CancellationReasonDto |  |
