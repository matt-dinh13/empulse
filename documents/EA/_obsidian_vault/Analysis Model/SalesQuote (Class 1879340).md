---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3"
domain: "Analysis Model"
element_id: 1879340
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SalesQuote

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3

## 📝 Notes

Sales Quotes applied on Transaction Supplement

## 🔗 Connections (2)

- ← Usage: [[TransactionSupplement (Class 1879341)]]
- → Usage: [[AccountTransaction (Class 1879329)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement Notifications v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| loanServiceId | int |  |
| dealCode | string |  |
| parentQuoteCode | string |  |
| transactions | AccountTransaction |  |
