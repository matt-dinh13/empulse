---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model/OutgoingPaymentRestAPI - Use cases"
domain: "Analysis Model"
element_id: 1876527
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}OutgoingPaymentCreatedSE

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Use case Model/OutgoingPaymentRestAPI - Use cases

## 📝 Notes

{ADD PBR-1093 /}
System event triggered after outgoing payment creation

See UC 05.090 Generate outgoing payment for contract

## 🔗 Connections (3)

- ← Dependency: [[05.099 Create outgoing payment via REST API]]
- → Generalization: [[OutgoingPaymentSystemEvent]]
- → Association: [[Outgoing Payment]]

## 📊 Appears In (2 diagrams)

- Logical: OutgoingPaymentRestAPI
- Logical: OutgoingPaymentSystemEvent
