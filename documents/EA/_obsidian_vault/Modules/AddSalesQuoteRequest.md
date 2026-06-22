---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Add Sales Quote to Contract Supplement"
domain: "Modules"
element_id: 1869942
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 AddSalesQuoteRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Add Sales Quote to Contract Supplement

## 📝 Notes

Structure of the request for Sales Quote adding to Contract Supplement

## 🔗 Connections (2)

- ← Usage: [[ContractSupplements (Interface 1869924)]]
- → Usage: [[ContractService (Class 1869941)]]

## 📊 Appears In (1 diagrams)

- Logical: Add Sales Quote to Contract Supplement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractSupplementId | string |  |
| {ADD}accountNumber | string |  |
| salesQuoteId | string |  |
| paymentChannelId | string |  |
| parentSalesQuoteId | string |  |
| contractServices | ContractService |  |
