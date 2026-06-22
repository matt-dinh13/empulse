---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing"
domain: "Analysis Model"
element_id: 1549377
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Credit Limit Change Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing

## 🔗 Connections (2)

- → Usage: [[Credit Limit Change Result Item]]
- → Aggregation: [[Campaign Processing Result]]

## 📊 Appears In (1 diagrams)

- Logical: Campaign processing result - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | long |  |
| Account Number | long |  |
| Processing Results | Credit Limit Change Result Item |  |
| Contract Code | string |  |
| Current Credit Limit | Financial Amount |  |
| Requested Credit Limit | Financial Amount |  |
