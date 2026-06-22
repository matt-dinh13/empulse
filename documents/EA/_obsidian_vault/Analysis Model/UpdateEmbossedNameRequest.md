---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1/Messages"
domain: "Analysis Model"
element_id: 1598805
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateEmbossedNameRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1/Messages

## 📝 Notes

Update embossed name request.

## 🔗 Connections (3)

- ← Dependency: [[CardModificationWS (Interface 1598798)]]
- → Dependency «use»: [[PaymentCardId (Class 1598801)]]
- → Dependency «use»: [[HolderName (Class 1598802)]]

## 📊 Appears In (2 diagrams)

- Logical: CardModificationWS - messages
- Logical: CardModificationWS.UpdateEmbossedName

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| newEmbossedName | HolderName |  |
| pcid | long |  |
