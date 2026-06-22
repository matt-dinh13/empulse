---
type: Interface
stereotype: "JMSqueue"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4305 (CBL-14055) Migrate ProcessAccountClosureResultRequest to RabbitMQ"
domain: "Requirements Model"
element_id: 1852601
diagrams: 3
connections: 4
tags:
  - interface
  - requirements-model
---

# 🔶 AccountNotificationService

> **Type**: Interface · **Stereotype**: «JMSqueue»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4305 (CBL-14055) Migrate ProcessAccountClosureResultRequest to RabbitMQ

## 📝 Notes

This queue is used for all notifications about account beside notifications regarding requests from GUI.

## 🔗 Connections (3)

- → Abstraction «trace»: [[01.740 Process notification about credit account closure (UseCase 1839633)]]
- → Usage: [[CreditLimitChangeResultRequest]]
- → Usage: [[ProcessServiceOperationNotificationRequest]]

## 📊 Appears In (3 diagrams)

- Custom: CLM-4305 (CBL-14055) Migrate ProcessAccountClosureResultRequest to RabbitMQ
- Logical: Consumed messages - Credit limit change
- Logical: Consumed messages - Process Service Operation Notification
