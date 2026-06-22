---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2"
domain: "Analysis Model"
element_id: 1598915
diagrams: 6
connections: 11
tags:
  - interface
  - analysis-model
---

# 🔶 CardModificationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2

## 📝 Notes

WS for card modification, provides diverse operations.

## 🔗 Connections (11)

- → Dependency: [[UpdateCardDeliveryTypeResponse]]
- → Dependency: [[VerifyEmbossedNameRequest (Class 1598927)]]
- → Dependency: [[UpdateCardDeliveryTypeRequest]]
- → Realisation: [[LOR-490 Integrate to new versions of CMSs WS]]
- → Dependency: [[CreateEmbossedNameRequest (Class 1598920)]]
- → Dependency «use»: [[ChangeEcommerceStatusRequest (Class 1598912)]]
- → Dependency: [[VerifyEmbossedNameResponse (Class 1598925)]]
- → Dependency «use»: [[ChangeEcommerceStatusResponse (Class 1598923)]]
- → Dependency «use»: [[UpdateEmbossedNameResponse (Class 1598921)]]
- → Dependency: [[CreateEmbossedNameResponse (Class 1598919)]]
- → Dependency «use»: [[UpdateEmbossedNameRequest (Class 1598924)]]

## 📊 Appears In (6 diagrams)

- Logical: CardModificationWS
- Logical: CardModificationWS.ChangeEcommerceStatus
- Logical: CardModificationWS.CreateEmbossedName
- Logical: CardModificationWS.UpdateCardDeliveryType
- Logical: CardModificationWS.UpdateEmbossedName
- Logical: CardModificationWS.VerifyEmbossedName
