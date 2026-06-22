---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Notifications/Entity Modification Notification"
domain: "Analysis Model"
element_id: 1858659
diagrams: 2
connections: 12
tags:
  - interface
  - analysis-model
---

# 🔶 {ADD} NotificationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Notifications/Entity Modification Notification

## 📝 Notes

{ADD DRR-396/}

Interface for sending notifications that data in BSL have been changed and need to be updated in cooperating systems.

## 🔗 Connections (12)

- ← Dependency «use»: [[{MOD} 00.170 Update bank]]
- ← Dependency «use»: [[{MOD} 00.130 Update bank branch]]
- ← Dependency «use»: [[{MOD} 00.160 Create bank]]
- ← Dependency «use»: [[{MOD} 00.120 Create bank branch]]
- ← Dependency: [[{DEL}04.180 Activate Tariff version manually]]
- → Dependency: [[NotificationRequest (Class 1858657)]]
- → Dependency: [[NotificationResponse]]
- ← Dependency: [[{DEL}08.180 Activate Service version manually]]
- ← Dependency «use»: [[{DEL}02.450 Manage commodity categories]]
- ← Dependency «use»: [[{DEL}02.460 Deactivate commodity type]]
- ← Dependency «use»: [[{DEL}02.440 Update commodity type]]
- ← Dependency: [[{DEL}02.260 Activate product version manually]]

## 📊 Appears In (2 diagrams)

- Logical: Entity Modification Notification - Interface
- Use Case: Entity Modification Notification - Involved Use Cases
