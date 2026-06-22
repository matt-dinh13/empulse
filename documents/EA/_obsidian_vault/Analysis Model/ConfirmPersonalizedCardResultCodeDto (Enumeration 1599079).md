---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages"
domain: "Analysis Model"
element_id: 1599079
diagrams: 2
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 ConfirmPersonalizedCardResultCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Messages

## 📝 Notes

Response result codes for confirm personalized card operation.

## 🔗 Connections (2)

- → Realisation: [[LOR-1272 Retest card delivery address functionality]]
- ← Dependency: [[ConfirmPersonalizedCardResponse (Class 1599066)]]

## 📊 Appears In (2 diagrams)

- Logical: CardOriginationWS  - messages
- Logical: CardOriginationWS.ConfirmPersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ERROR_OPERATION_NOT_ALLOWED_FOR_CURRENT_STATE |  |  |
| SUCCESS |  |  |
| ERROR_CARD_NOT_FOUND |  |  |
| ERROR_INVALID_CARD_TYPE |  |  |
| OTHER_ERROR |  |  |
