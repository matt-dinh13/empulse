---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1481442
diagrams: 2
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 {ADD}ChangeEcommerceStatusResponseResultCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

{ADD PBR-1230 /}
Response result codes for get allowed e-commerce statuses.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}ChangeEcommerceStatusResponse]]
- ← Dependency «use»: [[ChangeEcommerceStatusResponse (Class 1598923)]]

## 📊 Appears In (2 diagrams)

- Logical: Card Management - E-commerce
- Logical: CardModificationWS.ChangeEcommerceStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SUCCESS | string |  |
| ERROR_MISSING_MOBILE_NUMBER | string |  |
| OTHER_ERROR | string |  |
| ERROR_NOT_ALLOWED_FOR_CARD_TYPE | string |  |
| SUCCESS_ECOMMERCE_STATUS_WILL_BE_PROPAGATED_OFFLINE_LATER | string |  |
