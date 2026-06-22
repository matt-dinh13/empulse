---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Use Case Model"
domain: "Modules"
element_id: 1877517
diagrams: 7
connections: 13
tags:
  - actor
  - modules
---

# 👤 System

> **Type**: Actor
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Use Case Model

## 📝 Notes

Component inside Homer Select, which allows technological optimization of communication (credential, ultra high performance, etc.).

## 🔗 Connections (12)

- → UseCase: [[Process refund notification]]
- → UseCase: [[{MOD}05.380 Create incoming payment on local request]]
- → UseCase: [[{MOD}05.345 Cancel incoming payment on local request]]
- → UseCase: [[05.381 Cancel incoming payments by type for contract on local request (UseCase 1673235)]]
- → UseCase: [[05.194 Process ArtificialIncomingPaymentRequest notification]]
- → UseCase: [[05.193 Process ContracFullInfoRequest notification]]
- → UseCase: [[TODO 05.400 Process incoming payment message]]
- → UseCase: [[05.195 Process RefundInfoMessage notification]]
- ← Generalization: [[Cabus AM (Actor 1877516)]]
- ← Generalization: [[Print Server (Actor 1877515)]]
- ← Generalization: [[Installment schedule (Actor 1877514)]]
- ← Generalization: [[CIF (Actor 1877511)]]

## 📊 Appears In (7 diagrams)

- Use Case: Cancel incoming payments by type for contract on local request
- Use Case: Cancelation incoming payment on internal component request
- Use Case: Creating incoming payment on internal component request
- Use Case: Incoming Payments - Actors
- Use Case: Process notifications from other systems
- Use Case: Processing incoming payments message
- Use Case: Refund processing
