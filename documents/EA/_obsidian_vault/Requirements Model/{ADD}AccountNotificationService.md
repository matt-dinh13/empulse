---
type: Interface
stereotype: "RabbitMQ"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4305 (CBL-14055) Migrate ProcessAccountClosureResultRequest to RabbitMQ"
domain: "Requirements Model"
element_id: 1633729
diagrams: 2
connections: 2
tags:
  - interface
  - requirements-model
---

# 🔶 {ADD}AccountNotificationService

> **Type**: Interface · **Stereotype**: «RabbitMQ»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4305 (CBL-14055) Migrate ProcessAccountClosureResultRequest to RabbitMQ

## 📝 Notes

{ADD CLM-4305/}
This queue is used for all notifications about account beside notifications regarding requests from GUI.

## 🔗 Connections (2)

- → Usage: [[ProcessAccountClosureResultRequest (Class 1634479)]]
- → Dependency «trace»: [[01.740 Process notification about credit account closure (UseCase 1839633)]]

## 📊 Appears In (2 diagrams)

- Custom: CLM-4305 (CBL-14055) Migrate ProcessAccountClosureResultRequest to RabbitMQ
- Logical: ProcessAccountClosureResult
