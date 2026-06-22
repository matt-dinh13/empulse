---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1"
domain: "Analysis Model"
element_id: 1598816
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ChangeEcommerceStatusRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1

## 📝 Notes

Change e-commerce status request.

## 🔗 Connections (2)

- ← Dependency: [[CardModificationWS (Interface 1598798)]]
- → Dependency «use»: [[EcommerceStatusDto (Enumeration 1598814)]]

## 📊 Appears In (1 diagrams)

- Logical: CardModificationWS.ChangeEcommerceStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentCardId | long |  |
| status | EcommerceStatusDto |  |
| note | string |  |
