---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1"
domain: "Analysis Model"
element_id: 1598938
diagrams: 7
connections: 16
tags:
  - interface
  - analysis-model
---

# 🔶 CardOriginationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1

## 📝 Notes

WS for card origination, provides operations that involves card issuing process.

{CLM-768} ReplaceCard

## 🔗 Connections (16)

- → Dependency: [[ConfirmInstantCardResponse (Class 1598943)]]
- → Dependency: [[ConfirmInstantCardRequest (Class 1598960)]]
- → Dependency: [[CreatePersonalizedCardResponse (Class 1598962)]]
- → Dependency: [[CreatePersonalizedCardRequest (Class 1598963)]]
- → Dependency: [[ConfirmPersonalizedCardResponse (Class 1598966)]]
- → Dependency: [[ConfirmPersonalizedCardRequest (Class 1598964)]]
- → Dependency: [[ReserveInstantCardRequest]]
- → Dependency: [[ReserveInstantCardResponse (Class 1598970)]]
- → Dependency: [[ActivateCardRequest (Class 1598978)]]
- → Dependency: [[ActivateCardResponse (Class 1598977)]]
- → Dependency: [[ReplaceCardRequest (Class 1598982)]]
- → Dependency: [[ReplaceCardResponse (Class 1598981)]]
- ← Dependency: [[01.185 Validate card number (UseCase 1878505)]]
- ← Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]
- ← Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]
- ← Dependency: [[01.182 Prepare documentation manually]]

## 📊 Appears In (7 diagrams)

- Logical: CardOriginationWS
- Logical: CardOriginationWS.ActivateCard
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.ConfirmPersonalizedCard
- Logical: CardOriginationWS.CreatePersonalizedCard
- Logical: CardOriginationWS.ReplaceCard
- Logical: CardOriginationWS.ReserveInstantCard
