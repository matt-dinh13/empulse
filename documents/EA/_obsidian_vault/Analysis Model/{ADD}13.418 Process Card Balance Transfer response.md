---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Use Case Model"
domain: "Analysis Model"
element_id: 1816914
diagrams: 1
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.418 Process Card Balance Transfer response

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Use Case Model

## 📝 Notes

{ADD CSI-3342 /}
The use case presents processing a response for Card Balance Transfer from AM. If the response returns an error, or the processing failed, the Contract Supplement is cancelled.

## 🔗 Connections (2)

- → Dependency: [[Create business event]]
- ← Association: [[CaBus-AM]]

## 📊 Appears In (1 diagrams)

- Use Case: Card Balance Transfer request processing - Use Case Model
