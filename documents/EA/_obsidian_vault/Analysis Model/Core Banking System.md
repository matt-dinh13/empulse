---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Messages processing/Use Case model"
domain: "Analysis Model"
element_id: 1880889
diagrams: 3
connections: 8
tags:
  - actor
  - analysis-model
---

# 👤 Core Banking System

> **Type**: Actor
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Messages processing/Use Case model

## 📝 Notes

This actor represents an external system which is responsible for operation with payments, transaction etc. (i.e. OBS, CBS or even HoSel CBS Adapter).

## 🔗 Connections (7)

- → NoteLink: [[Incoming Payments _Generated JMS messages - Set incoming payments]]
- → NoteLink: [[IncomingPayments _Consumed JMS messages - Incoming payments]]
- → UseCase: [[05.400 Process incoming payment message]]
- → UseCase: [[{DEL}05.502 Process refund message]]
- → UseCase: [[{MOD}05.350 Process disbursement confirmation message]]
- → UseCase: [[{DEL}01.902 Process message with result of contract sale (Boundary 1880901)]]
- → UseCase: [[External Reference (Boundary 1880185)]]

## 📊 Appears In (3 diagrams)

- Use Case: Messages processing
- Use Case: Process refund message
- Use Case: Processing disbursement confirmation message
