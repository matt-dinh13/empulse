---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3"
domain: "Analysis Model"
element_id: 1879334
diagrams: 3
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 SupplementData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3

## 🔗 Connections (8)

- ← Dependency: [[CreditLimitChangeSupplements (Interface 1862861)]]
- ← Usage: [[SupplementNotification (Class 1879338)]]
- → Usage: [[ContractSupplementStatusTransition (Class 1862871)]]
- → Usage: [[CustomData (Class 1879333)]]
- → Usage: [[RelatedSubject (Class 1879332)]]
- → Usage: [[RequestSourceIdDto (Class 1879331)]]
- → Usage: [[SupplementTypeSpecificData (Class 1879330)]]
- → Usage: [[SupplementDocument (Class 1879328)]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Supplement Notifications v3
- Logical: CreditLimitChangeSupplements - Get supplement
- Logical: Generated messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | string |  |
| supplementType | string |  |
| supplementCode | string |  |
| requestSourceId | RequestSourceIdDto |  |
| currentStatus | string |  |
| statusLog | ContractSupplementStatusTransition |  |
| relatedSubjects | RelatedSubject |  |
| customData | CustomData |  |
| documents | SupplementDocument |  |
| typeSpecificData | SupplementTypeSpecificData |  |
