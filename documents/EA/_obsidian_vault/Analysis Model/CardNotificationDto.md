---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions/Types"
domain: "Analysis Model"
element_id: 1160751
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 CardNotificationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions/Types

## 📝 Notes

Identification of a card that was affected by the event for an account notification.

## 📊 Appears In (1 diagrams)

- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceEventID | TransactionSourceIdDto |  |
| accountNumber | AccountNumberType |  |
| eventType | NotificationEventTypeDto |  |
| eventDate | date |  |
| pcid | PaymentCardIdType |  |
| truncatedPan | TruncatedPanType |  |
| eventOrder | long |  |
| suppressFee | boolean |  |
| note | string |  |
