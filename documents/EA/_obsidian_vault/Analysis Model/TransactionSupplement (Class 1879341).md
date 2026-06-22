---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3"
domain: "Analysis Model"
element_id: 1879341
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 TransactionSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3

## 📝 Notes

{ADD CSI-4317}{Country VN}
This typeSpecificData will be used for supplement types:
- TRANSACTION
- CONTRACT_SERVICE_REPLACE
{/ADD}

## 🔗 Connections (3)

- → Usage: [[TransactionChangeRequest (Class 1879342)]]
- → Usage: [[SalesQuote (Class 1879340)]]
- → Generalization: [[SupplementTypeSpecificData (Class 1879330)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement Notifications v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanType | string |  |
| applicationCode | string |  |
| marketingOfferId | string |  |
| salesQuotes | SalesQuote |  |
| transactionChangeRequests | TransactionChangeRequest |  |
