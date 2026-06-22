---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages"
domain: "Analysis Model"
element_id: 1804069
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeRequestResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages

## 📝 Notes

A structure of the credit limit change request

## 🔗 Connections (3)

- → Usage: [[RequestSourceId (Class 1804068)]]
- → Usage: [[CreditLimitChangeType]]
- → Usage: [[CreditLimitChangeResultData]]

## 📊 Appears In (1 diagrams)

- Logical: Credit Limit Change Request - processing response message

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | CreditLimitChangeType |  |
| resultData | CreditLimitChangeResultData |  |
| requestSource | RequestSourceId |  |
