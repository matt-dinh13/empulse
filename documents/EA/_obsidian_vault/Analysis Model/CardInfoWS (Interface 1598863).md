---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2"
domain: "Analysis Model"
element_id: 1598863
diagrams: 5
connections: 9
tags:
  - interface
  - analysis-model
---

# 🔶 CardInfoWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2

## 📝 Notes

CBL-1293 CLM - Replace CardManagementWS with CardInfoWS and CardModificationWS

## 🔗 Connections (9)

- → Dependency: [[GetCardsRequest (Class 1598867)]]
- → Dependency «use»: [[GetPlasticsOfCardResponse (Class 1598869)]]
- → Dependency: [[GetCardResponse (Class 1598870)]]
- → Realisation: [[LOR-490 Integrate to new versions of CMSs WS]]
- → Dependency «use»: [[GetPlasticsOfCardRequest (Class 1598871)]]
- → Dependency: [[FindCardRequest]]
- → Dependency: [[GetCardsResponse (Class 1598868)]]
- → Dependency: [[GetCardRequest (Class 1598866)]]
- → Dependency: [[FindCardResponse]]

## 📊 Appears In (5 diagrams)

- Logical: CardInfoWS
- Logical: CardInfoWS.FindCard
- Logical: CardInfoWS.GetCard
- Logical: CardInfoWS.GetCards
- Logical: CardInfoWS.GetPlasticsOfCard
