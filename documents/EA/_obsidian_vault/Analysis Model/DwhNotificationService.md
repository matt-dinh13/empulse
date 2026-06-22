---
type: Interface
stereotype: "interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Notifications/DwhNotificationService"
domain: "Analysis Model"
element_id: 920925
diagrams: 1
connections: 4
tags:
  - interface
  - analysis-model
---

# 🔶 DwhNotificationService

> **Type**: Interface · **Stereotype**: «interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Notifications/DwhNotificationService

## 📝 Notes

The service is implemented on a subscriber side and it is called by DWH in case data of particular data set is ready for downloading.
For next information see HomeDW web services

## 🔗 Connections (3)

- → Dependency: [[Types (Boundary 920928)]]
- → Dependency «use»: [[ProcessNotificationResponse]]
- → Dependency «use»: [[ProcessNotificationRequest]]

## 📊 Appears In (1 diagrams)

- Logical: DwhNotificationService
