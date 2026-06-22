---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3"
domain: "Analysis Model"
element_id: 1879338
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SupplementNotification

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Interface Provided/Generated Notifications/Contract Supplement Notifications/Contract Supplement Notifications v3

## 🔗 Connections (2)

- → Usage: [[SupplementData (Class 1879334)]]
- → Usage: [[SupplementEventType (Enumeration 1879327)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Supplement Notifications v3
- Logical: Generated messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | SupplementEventType |  |
| source | string |  |
| time | timestamp |  |
| eventId | string |  |
| data | SupplementData |  |
