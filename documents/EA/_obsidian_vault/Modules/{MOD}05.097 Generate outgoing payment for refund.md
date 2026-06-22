---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Access Rights"
domain: "Modules"
element_id: 1869255
diagrams: 7
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {MOD}05.097 Generate outgoing payment for refund

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Access Rights

## 📝 Notes

The UC describes steps to create an outgoing payment for refund

## 🔗 Connections (4)

- ← UseCase «include»: [[{DEL} 05.500 Create refund automatically]]
- ← UseCase «include»: [[05.515 Generate outgoing payment for refund items (UseCase 1877126)]]
- → Realisation: [[05.097 Generate outgoing payment for refund]]
- ← UseCase «include»: [[05.550 Create refund of overpayment on request]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Custom: PAYM-1180 (CBL-711) - Inc. pay. modularization - ANA/DEV synchro Sprint 20
- Use Case: {DEL}Creating Refunds automatically
- Use Case: Processing outgoing payments for refunds
- Use Case: Refunds management
- Use Case: REL Creating Refunds on request
