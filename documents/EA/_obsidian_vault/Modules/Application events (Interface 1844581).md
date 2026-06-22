---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/COMMON for Commodity/Notification"
domain: "Modules"
element_id: 1844581
diagrams: 2
connections: 7
tags:
  - interface
  - modules
---

# 🔶 Application events

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/COMMON for Commodity/Notification

## 📝 Notes

Events are sent to exchange commodity.events.v1

Documentation https://git.homecredit.net/pcg/commodity/-/blob/develop/doc/events.md

## 🔗 Connections (7)

- ← Dependency: [[POST Commodity Type]]
- ← Dependency: [[PUT Commodity Type]]
- ← Dependency: [[PUT Commodity Catrgories]]
- ← Dependency: [[POST Commodity Categories]]
- → Dependency: [[NotificationRequest]]
- ← Dependency: [[PUT Commodity]]
- ← Dependency: [[POST Commodity]]

## 📊 Appears In (2 diagrams)

- Logical: Notification
- Use Case: Notification in Use Cases
