---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages"
domain: "Analysis Model"
element_id: 1598925
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 VerifyEmbossedNameResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages

## 📝 Notes

Verify embossed name response.

## 🔗 Connections (2)

- → Dependency: [[VerifyEmbossedNameResultCodeDto (Enumeration 1598918)]]
- ← Dependency: [[CardModificationWS (Interface 1598915)]]

## 📊 Appears In (2 diagrams)

- Logical: CardModificationWS - messages
- Logical: CardModificationWS.VerifyEmbossedName

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | VerifyEmbossedNameResultCodeDto |  |
| embossedName | string |  |
