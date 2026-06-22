---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Access Rights"
domain: "Analysis Model"
element_id: 1877052
diagrams: 3
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}05.502 Process refund message

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Access Rights

## 📝 Notes

NOT USED after modulariaztion
The use case automatically creates/cancels a refund to the provided contract based on message from external system. In this case refund will be separately entity without relations to the incoming/outgoing payment.

## 🔗 Connections (5)

- → Dependency: [[Cancel refund item on external request rule]]
- → Realisation: [[REQ#1 Process refund message]]
- → Realisation: [[05.502 Process refund message]]
- → Dependency: [[Create refund item on external request rule]]
- ← UseCase: [[Core Banking System]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Use Case: Process refund message
