---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Access Rights"
domain: "Analysis Model"
element_id: 1881430
diagrams: 5
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.128 Process transaction confirmation response

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Access Rights

## 📝 Notes

{ADD CSI-3619 /}
The use case presents function for processing responses for account transaction confirmation received from AM exchange.
It is used only if feature flag AsyncTransConfirmAM =1

## 🔗 Connections (2)

- → Realisation: [[{ADD}13.128 Process transaction confirmation request]]
- → Association: [[CaBus-AM]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Use Case: Transaction Supplement - Account notification processing - Use case model
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement refunding - Use case model
