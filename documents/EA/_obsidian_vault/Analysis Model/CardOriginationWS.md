---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3"
domain: "Analysis Model"
element_id: 1599055
diagrams: 6
connections: 12
tags:
  - interface
  - analysis-model
---

# 🔶 CardOriginationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3

## 📝 Notes

WS for card origination, provides operations that involves card issuing process.

## 🔗 Connections (12)

- → NoteLink: [[CardOriginationWS_v3 _ {ADD}CardOriginationWS.CreatePersonalizedCardRSA]]
- → Realisation: [[LOR-490 Integrate to new versions of CMSs WS]]
- → Dependency: [[ConfirmInstantCardResponse (Class 1599060)]]
- → Dependency: [[ReserveInstantCardRequest (Class 1599059)]]
- → Dependency: [[CreatePersonalizedCardResponse (Class 1599067)]]
- → Dependency: [[ConfirmInstantCardRequest (Class 1599061)]]
- → Dependency: [[ReserveInstantCardResponse (Class 1599064)]]
- → Dependency: [[PreparePersonalizedCardResponse]]
- → Dependency: [[ConfirmPersonalizedCardRequest (Class 1599058)]]
- → Dependency: [[PreparePersonalizedCardRequest]]
- → Dependency: [[CreatePersonalizedCardRequest (Class 1599065)]]
- → Dependency: [[ConfirmPersonalizedCardResponse (Class 1599066)]]

## 📊 Appears In (6 diagrams)

- Logical: CardOriginationWS
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.ConfirmPersonalizedCard
- Logical: CardOriginationWS.CreatePersonalizedCard
- Logical: CardOriginationWS.PreparePersonalizedCard
- Logical: CardOriginationWS.ReserveInstantCard
