---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822364
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Extended Custom Search

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

This grid is visible only for KZ users as a result of Custom BO Search and Custom Search.

This grid can be sorted based on value of any from its columns - there is only one exception "Payment Date". This column brings technical difficulties.

## 🔗 Connections (2)

- → Dependency: [[Contact type icon rules]]
- → Dependency: [[Insurance icon rules]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| National Identification Number | text |  |
| Payment Date | Date |  |
| Client's Name | text |  |
| Contract Number | Contract code |  |
| Contract Signature Date | Date |  |
| Credit Amount | Financial Amount |  |
| Date Created | Date |  |
| Functional Buttons |  |  |
| Mistakes | text |  |
| POS | text |  |
| Seller | text |  |
| Status | Enumeration Cotract Status |  |
