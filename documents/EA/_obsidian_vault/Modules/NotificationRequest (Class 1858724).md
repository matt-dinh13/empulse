---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Notification"
domain: "Modules"
element_id: 1858724
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 NotificationRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Notification

## 🔗 Connections (5)

- ← Dependency: [[Application events (Interface 1858728)]]
- → Dependency: [[Originator (Enumeration 1858727)]]
- → Dependency: [[entityId]]
- → Dependency: [[Entity Type]]
- → Dependency: [[Event Type]]

## 📊 Appears In (1 diagrams)

- Logical: Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| originator | string |  |
| eventType | string |  |
| entityType | string |  |
| entityIds | entityId |  |
