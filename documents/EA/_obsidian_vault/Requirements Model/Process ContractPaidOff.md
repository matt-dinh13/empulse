---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event"
domain: "Requirements Model"
element_id: 1880180
diagrams: 6
connections: 6
tags:
  - usecase
  - requirements-model
---

# 🎯 Process ContractPaidOff

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event

## 📝 Notes

{ADD CLM-4481/}
This use case describes processing Kafka notification ContractPaidOff from COMA module or BSL system.

## 🔗 Connections (4)

- → Dependency: [[Process ContractPaidOffSE [CLM]]]
- → Dependency: [[{ADD}Process ContractPaidOffSE [IS]]]
- ← Association: [[COMA (Actor 1880872)]]
- ← Association: [[BSL (Actor 1880871)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event
- Custom: CBL-16722 (CLM-4661) - BSL - start to send Kafka ContractEvent on contract changes
- Use Case: Messages processing
- Use Case: Pay-off CEL contract
- Use Case: Pay-off contracts from external system
- Use Case: Pay-off REL contract
