---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2"
domain: "Analysis Model"
element_id: 1598923
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ChangeEcommerceStatusResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2

## 📝 Notes

Change e-commerce status response.

## 🔗 Connections (5)

- → Dependency «use»: [[{ADD}ChangeEcommerceStatusResponseResultCodeDto]]
- → Dependency: [[{ADD}EcommerceStatusesForCardtypeResponseResultCodeDto]]
- → Dependency «use»: [[ChangeEcommerceStatusResponseResultCodeDto (Enumeration 1598928)]]
- → Dependency: [[EcommerceStatusesForCardtypeResponseResultCodeDto]]
- ← Dependency «use»: [[CardModificationWS (Interface 1598915)]]

## 📊 Appears In (1 diagrams)

- Logical: CardModificationWS.ChangeEcommerceStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ChangeEcommerceStatusResponseResultCodeDto |  |
