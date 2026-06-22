---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/COMMON for Commodity/Notification"
domain: "Modules"
element_id: 1844577
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 NotificationRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/COMMON for Commodity/Notification

## 🔗 Connections (5)

- → Dependency: [[EntityId]]
- → Dependency: [[Entity type]]
- → Dependency: [[Originator]]
- ← Dependency: [[Application events (Interface 1844581)]]
- → Dependency: [[Event type]]

## 📊 Appears In (1 diagrams)

- Logical: Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| originator | string |  |
| eventType | string |  |
| entityType | string |  |
| entityIds | EntityId |  |
