---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880959
diagrams: 10
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.240 Cancel outgoing payments

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

System executes this use case to cancel outgoing payments provided as parameters or all outgoing payments associated with contract.
If a canceled payment is related to a refund order, then all refund items within the order are canceled as well.

## 🔗 Connections (7)

- ← UseCase «include»: [[05.700 Process TransactionMessageDto]]
- ← UseCase «include»: [[01.360 Cancel contract (UseCase 1850507)]]
- ← UseCase «include»: [[05.516 Cancel unpaid outgoing payment for refund (UseCase 1877127)]]
- ← UseCase «include»: [[08.111 Cancel contract insurance common]]
- → Realisation: [[05.240 Cancel outgoing payments]]
- → Realisation: [[REQ#1 Message ORDERPAY140]]
- → Realisation: [[REQ#4 Processing outgoing payments for refunds]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: PAYM-1180 (CBL-711) - Inc. pay. modularization - ANA/DEV synchro Sprint 20
- Use Case: Cancel contract
- Use Case: Cancel contract after sign
- Use Case: Cancel contract manually
- Use Case: Cancellation of Insurance contract options
- Use Case: Generate and Cancel outgoing payments
- Use Case: Process TransactionMessageDto 
- Use Case: Processing outgoing payments for refunds
- Use Case: Refunds management
