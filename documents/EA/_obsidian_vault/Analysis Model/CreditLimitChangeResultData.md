---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages"
domain: "Analysis Model"
element_id: 1804066
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeResultData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages

## 🔗 Connections (2)

- ← Usage: [[CreditLimitChangeRequestResult]]
- → Dependency: [[ScoringAdditionalData]]

## 📊 Appears In (1 diagrams)

- Logical: Credit Limit Change Request - processing response message

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customerId | long |  |
| contractCode | string |  |
| offerId | string |  |
| currentCreditLimit | Money |  |
| requestStatus | string |  |
| requestId | string |  |
| statusChangeReason | string |  |
| previousCreditLimit | Money |  |
| approvalResults | ScoringAdditionalData |  |
