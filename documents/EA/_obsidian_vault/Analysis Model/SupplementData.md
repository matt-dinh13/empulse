---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications"
domain: "Analysis Model"
element_id: 1862971
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 SupplementData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications

## 🔗 Connections (7)

- → Usage: [[SupplementTypeSpecificData]]
- ← Usage: [[SupplementNotification]]
- → Usage: [[RelatedSubject (Class 1862983)]]
- → Usage: [[ContractSupplementStatusTransition (Class 1862871)]]
- → Usage: [[SupplementDocument (Class 1862987)]]
- → Usage: [[RequestSourceIdDto (Class 1862992)]]
- → Usage: [[CustomData (Class 1862982)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Supplement Notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| supplementTypeCode | string |  |
| id | string |  |
| statusLog | ContractSupplementStatusTransition |  |
| typeSpecificData | SupplementTypeSpecificData |  |
| requestSourceId | RequestSourceIdDto |  |
| relatedSubjects | RelatedSubject |  |
| customData | CustomData |  |
| documents | SupplementDocument |  |
| currentStatus | string |  |
