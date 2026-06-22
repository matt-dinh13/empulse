---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2"
domain: "Analysis Model"
element_id: 1598985
diagrams: 7
connections: 13
tags:
  - interface
  - analysis-model
---

# 🔶 CardOriginationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2

## 📝 Notes

WS for card origination, provides operations that involves card issuing process.

{CLM-768} ReplaceCard

## 🔗 Connections (13)

- → Dependency: [[ConfirmInstantCardRequest (Class 1598989)]]
- → Dependency «use»: [[ReplaceCardRequest (Class 1598992)]]
- → Dependency: [[CreatePersonalizedCardRequest (Class 1598996)]]
- → Dependency: [[{MOD}ReserveInstantCardRequest]]
- → Dependency: [[CreatePersonalizedCardResponse (Class 1598995)]]
- → Dependency: [[ConfirmInstantCardResponse (Class 1598988)]]
- → Dependency «use»: [[ActivateCardResponse (Class 1598998)]]
- → Dependency: [[ConfirmPersonalizedCardResponse (Class 1598994)]]
- → Dependency «use»: [[ReplaceCardResponse (Class 1598999)]]
- → Dependency: [[ConfirmPersonalizedCardRequest (Class 1598993)]]
- → Realisation: [[LOR-490 Integrate to new versions of CMSs WS]]
- → Dependency: [[ReserveInstantCardResponse]]
- → Dependency «use»: [[ActivateCardRequest (Class 1598991)]]

## 📊 Appears In (7 diagrams)

- Logical: CardOriginationWS
- Logical: CardOriginationWS.ActivateCard
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.ConfirmPersonalizedCard
- Logical: CardOriginationWS.CreatePersonalizedCard
- Logical: CardOriginationWS.ReplaceCard
- Logical: CardOriginationWS.ReserveInstantCard
