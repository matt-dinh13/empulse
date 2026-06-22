---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights"
domain: "Analysis Model"
element_id: 1869685
diagrams: 3
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.705 Get Outgoing Payment Amount via REST API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights

## 📝 Notes

{ADD PAYM-5082}
Use case describe cash loan disbursement calculation based on provided contract code (will be used to get payment amount before contract sign).

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentRestAPI (Interface 1869669)]]
- → Usage: [[Compute cash loan disbursement amount]]
- → Realisation: [[05.705 Get outgoing payment amount via REST API]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: OutgoingPaymentRestAPI
- Logical: OutgoingPaymentRestAPI - Get Otgoing Payment Amount
