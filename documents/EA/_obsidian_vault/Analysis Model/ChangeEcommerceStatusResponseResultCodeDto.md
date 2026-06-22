---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1"
domain: "Analysis Model"
element_id: 1598813
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 ChangeEcommerceStatusResponseResultCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1

## 📝 Notes

{ADD PBR-1230 /}
Response result codes for get allowed e-commerce statuses.

## 🔗 Connections (1)

- ← Dependency «use»: [[ChangeEcommerceStatusResponse]]

## 📊 Appears In (1 diagrams)

- Logical: CardModificationWS.ChangeEcommerceStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SUCCESS | string |  |
| ERROR_MISSING_MOBILE_NUMBER | string |  |
| OTHER_ERROR | string |  |
| ERROR_NOT_ALLOWED_FOR_CARD_TYPE | string |  |
| SUCCESS_ECOMMERCE_STATUS_WILL_BE_PROPAGATED_OFFLINE_LATER | string |  |
