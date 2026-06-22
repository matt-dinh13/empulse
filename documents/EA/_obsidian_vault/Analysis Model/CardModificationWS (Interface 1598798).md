---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1"
domain: "Analysis Model"
element_id: 1598798
diagrams: 6
connections: 12
tags:
  - interface
  - analysis-model
---

# 🔶 CardModificationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1

## 📝 Notes

WS for card modification, provides diverse operations.

## 🔗 Connections (12)

- → Dependency: [[UpdateCardDeliveryTypeRequest]]
- → Dependency: [[UpdateCardDeliveryTypeResponse]]
- → Dependency: [[UpdateEmbossedNameRequest]]
- → Dependency: [[UpdateEmbossedNameResponse]]
- → Dependency: [[VerifyEmbossedNameRequest]]
- → Dependency: [[VerifyEmbossedNameResponse]]
- → Dependency: [[CreateEmbossedNameResponse]]
- → Dependency: [[CreateEmbossedNameRequest]]
- → Dependency: [[ChangeEcommerceStatusRequest]]
- → Dependency: [[ChangeEcommerceStatusResponse]]
- ← Dependency: [[Emboss name - validation rules]]
- ← Dependency: [[Default Emboss name]]

## 📊 Appears In (6 diagrams)

- Logical: CardModificationWS
- Logical: CardModificationWS.ChangeEcommerceStatus
- Logical: CardModificationWS.CreateEmbossedName
- Logical: CardModificationWS.UpdateCardDeliveryType
- Logical: CardModificationWS.UpdateEmbossedName
- Logical: CardModificationWS.VerifyEmbossedName
