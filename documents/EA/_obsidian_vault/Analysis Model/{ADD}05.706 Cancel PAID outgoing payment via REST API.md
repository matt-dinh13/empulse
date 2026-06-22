---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights"
domain: "Analysis Model"
element_id: 1869655
diagrams: 3
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.706 Cancel PAID outgoing payment via REST API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights

## 📝 Notes

{PAYM-6119}{IN only}
Use case processing internal REST API for cancellation of outgoing payments which were already paid. 
During this process also related refunds are cancelled.

## 🔗 Connections (2)

- ← Dependency «use»: [[OutgoingPaymentInternalRestAPI]]
- → Realisation: [[05.706 Cancel PAID outgoing payment via REST API]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: OutgoingPaymentRestAPI
- Logical: OutgoingPaymentRestAPI - Cancel Paid Outgoing Payment
