---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Consumed messages"
domain: "Analysis Model"
element_id: 1553631
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CreditLimitChangeRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Consumed messages

## 📝 Notes

{ADD CSI-29 /}
A structure of the credit limit change request message

## 🔗 Connections (2)

- → Usage: [[CreditLimitChangeType]]
- → Usage: [[{ADD}CreditLimitChangeData]]

## 📊 Appears In (1 diagrams)

- Logical: Credit Limit Change Request - message structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | CreditLimitChangeType |  |
| data | {ADD}CreditLimitChangeData |  |
| requestSource | RequestSourceId |  |
