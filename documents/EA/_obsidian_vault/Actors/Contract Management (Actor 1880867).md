---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Actors"
domain: "Actors"
element_id: 1880867
diagrams: 2
connections: 5
tags:
  - actor
  - actors
---

# 👤 Contract Management

> **Type**: Actor
> **Package**: HomerSelect/BSL/Actors

## 🔗 Connections (5)

- → Association «Provider»: [[{ADD}05.323 Get payment channel by bank account data on external request (UseCase 1727111)]]
- → UseCase: [[05.322 Get payment channel on external request]]
- → UseCase: [[05.381 Cancel incoming payments by type for contract on local request (Boundary 1880916)]]
- → UseCase: [[{MOD}05.321 Update payment channel on external request]]
- → UseCase: [[{MOD}05.320 Create payment channel on external request]]

## 📊 Appears In (2 diagrams)

- Use Case: Actors
- Use Case: Payment Channels via WS
