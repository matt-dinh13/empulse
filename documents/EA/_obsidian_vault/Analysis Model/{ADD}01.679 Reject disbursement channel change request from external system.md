---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Use Case Model"
domain: "Analysis Model"
element_id: 1846351
diagrams: 1
connections: 1
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}01.679 Reject disbursement channel change request from external system 

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursement channel change request processing/Use Case Model

## 📝 Notes

{ADD PAYM-5537}
Use case descibes processing of disbursement channel change request rejection based on ticketing event notification.

Prerequisite:
Global parameter "ChangeDisbChannelAfterSign" is true

Notification:
Topic: tck.ticket.event.v1 or tck.related-subject.event.v1
status:
"code": "REJECTED"

## 🔗 Connections (1)

- ← Association: [[TCK (Actor 1880875)]]

## 📊 Appears In (1 diagrams)

- Use Case: Disbursement channel change request processing
