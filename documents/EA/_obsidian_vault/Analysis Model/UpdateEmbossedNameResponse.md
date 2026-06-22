---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1/Messages"
domain: "Analysis Model"
element_id: 1598804
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UpdateEmbossedNameResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1/Messages

## 📝 Notes

Update embossed name response.

## 🔗 Connections (4)

- ← Dependency: [[CardModificationWS (Interface 1598798)]]
- → Dependency «use»: [[PaymentCardId (Class 1598801)]]
- → Dependency «use»: [[HolderName (Class 1598802)]]
- → Dependency «use»: [[UpdateEmbossedNameResultCodeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CardModificationWS - messages
- Logical: CardModificationWS.UpdateEmbossedName

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | PaymentCardId |  |
| newEmbossedName | HolderName |  |
| resultCode | UpdateEmbossedNameResultCodeDto |  |
