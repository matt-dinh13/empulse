---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2"
domain: "Analysis Model"
element_id: 1598912
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ChangeEcommerceStatusRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2

## 📝 Notes

Change e-commerce status request.

## 🔗 Connections (3)

- → Dependency «use»: [[EcommerceStatusDto (Enumeration 1598872)]]
- → Dependency «use»: [[EcommerceStatusDto (Enumeration 1598814)]]
- ← Dependency «use»: [[CardModificationWS (Interface 1598915)]]

## 📊 Appears In (1 diagrams)

- Logical: CardModificationWS.ChangeEcommerceStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentCardId | long |  |
| status | EcommerceStatusDto |  |
