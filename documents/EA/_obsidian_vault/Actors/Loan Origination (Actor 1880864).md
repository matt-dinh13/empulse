---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Actors"
domain: "Actors"
element_id: 1880864
diagrams: 5
connections: 10
tags:
  - actor
  - actors
---

# 👤 Loan Origination

> **Type**: Actor
> **Package**: HomerSelect/BSL/Actors

## 🔗 Connections (10)

- ← UseCase: [[01.586 - Get DDM by code (UseCase 1862021)]]
- ← UseCase: [[01.584 - Get DDM by contract (UseCase 1862007)]]
- → UseCase: [[{ADD}05.323 Get payment channel by bank account data on external request (UseCase 1727111)]]
- → UseCase: [[05.322 Get payment channel on external request]]
- → UseCase: [[{MOD}05.321 Update payment channel on external request]]
- → UseCase: [[{ADD}05.324 Validate Payment Channel (UseCase 1727117)]]
- → UseCase: [[{MOD}05.320 Create payment channel on external request]]
- → UseCase: [[05.238 Process outgoing payments for ApplicationDocumentationPreparedNotification]]
- → UseCase: [[01.583 - Get DDM by CUID]]
- → UseCase: [[12.632 Create request for POS transaction without card]]

## 📊 Appears In (5 diagrams)

- Use Case: Actors
- Use Case: Cardless transaction request - Use case model
- Use Case: Get DDM info
- Use Case: Payment Channels via WS
- Use Case: Process internal system events and notifications for outgoing payments
