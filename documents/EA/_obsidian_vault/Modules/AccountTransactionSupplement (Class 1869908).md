---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Create Contract Supplement"
domain: "Modules"
element_id: 1869908
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 AccountTransactionSupplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Create Contract Supplement

## 📝 Notes

Extension for Transaction Contract Supplement type

## 🔗 Connections (3)

- → Usage: [[SalesQuoteApplied (Class 1869906)]]
- → Usage: [[TransactionChangeRequest (Class 1869905)]]
- ← Usage: [[ContractSupplement (Class 1869915)]]

## 📊 Appears In (2 diagrams)

- Logical: Create Contract Supplement
- Logical: Get Contract Supplements

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanType | string |  |
| applicationCode | string |  |
| salesQuotes | SalesQuoteApplied |  |
| transactionChangeRequests | TransactionChangeRequest |  |
