---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Web Services/ContractSupplements"
domain: "Analysis Model"
element_id: 1811225
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 AccountTransaction_v2

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Web Services/ContractSupplements

## 📝 Notes

Account Transaction related Sales Quote (Loan Service) to be charged

## 🔗 Connections (1)

- ← Usage: [[SalesQuote (Class 1811230)]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Supplements - Get Contract Supplement by CUID v4
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Logical: Transaction Supplement - Get Transaction Supplement v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | decimal |  |
| status | string |  |
| transactionId | string |  |
| date | dateTime |  |
| type | string |  |
| paymentChannelId | string |  |
| commodityExternalId | string |  |
| {ADD}loanCode | string |  |
