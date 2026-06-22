---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598927
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 VerifyEmbossedNameRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages

## 📝 Notes

Request to verify emboss name.

## 🔗 Connections (2)

- → Dependency: [[CardHolderName (Class 1598931)]]
- ← Dependency: [[CardModificationWS (Interface 1598915)]]

## 📊 Appears In (2 diagrams)

- Logical: CardModificationWS - messages
- Logical: CardModificationWS.VerifyEmbossedName

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cardHolderName | CardHolderName |  |
| CardType | string |  |
| embossedName | string |  |
