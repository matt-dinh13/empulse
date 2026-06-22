---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions/Types"
domain: "Analysis Model"
element_id: 1160762
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 TransactionNotificationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions/Types

## 📝 Notes

Transaction notification request

## 📊 Appears In (1 diagrams)

- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| transactionType | TransactionTypeDto |  |
| transactionSourceSystem | TransactionSourceIdDto |  |
| transactionAmount | MoneyDto |  |
| billingDate | date |  |
