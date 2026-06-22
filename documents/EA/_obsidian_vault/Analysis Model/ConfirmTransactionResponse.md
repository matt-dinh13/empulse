---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1387643
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmTransactionResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 🔗 Connections (2)

- → Dependency: [[ConfirmTransactionResultCodeDto]]
- ← Dependency: [[AccountTransactionWS]]

## 📊 Appears In (3 diagrams)

- Logical: AccountTransactionWS
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorMessage | string |  |
| resultCode | ConfirmTransactionResultCodeDto |  |
