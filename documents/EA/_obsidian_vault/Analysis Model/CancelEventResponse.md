---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387662
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelEventResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (2)

- → Dependency: [[CancelTransactionResultCodeDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionWS
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| resultCode | CancelTransactionResultCodeDto |  |
| error | ErrorTypeDto |  |
