---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598921
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UpdateEmbossedNameResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages

## 📝 Notes

Update embossed name response.

## 🔗 Connections (4)

- → Dependency «use»: [[UpdateEmbossedNameResultCodeDto (Enumeration 1598926)]]
- → Dependency «use»: [[HolderName (Class 1598930)]]
- → Dependency «use»: [[PaymentCardId (Class 1598932)]]
- ← Dependency «use»: [[CardModificationWS (Interface 1598915)]]

## 📊 Appears In (2 diagrams)

- Logical: CardModificationWS - messages
- Logical: CardModificationWS.UpdateEmbossedName

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | UpdateEmbossedNameResultCodeDto |  |
| newEmbossedName | HolderName |  |
| pcid | PaymentCardId |  |
