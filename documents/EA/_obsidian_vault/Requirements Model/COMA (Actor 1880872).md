---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished"
domain: "Requirements Model"
element_id: 1880872
diagrams: 13
connections: 7
tags:
  - actor
  - requirements-model
---

# 👤 COMA

> **Type**: Actor
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished

## 📝 Notes

Contract management module

## 🔗 Connections (7)

- ← Association: [[{ADD}Process ContractMigrationRollback]]
- ← Association: [[Process ContractCancelled]]
- ← Association: [[{ADD}Process ContractMigrated]]
- → Association: [[Process ContractFinished]]
- → UseCase: [[Process ContractWrittenOff]]
- → Association: [[Process ContractPaidOff]]
- → Association: [[External Reference (Boundary 1880186)]]

## 📊 Appears In (13 diagrams)

- Custom: CBL-12580 (CLM-4409) - BSL - Process Kafka notification ContractFinished
- Custom: CBL-1321 (CLM-4481) - REL Write-off & Pay-off - BSL - Process Kafka contract event
- Custom: CLM-6037 - BSL - Contract cancellation update
- Use Case: Cancel contract after sign
- Use Case: Cancel contract automatically
- Use Case: Cancel contract manually
- Use Case: Cancel contract on external request
- Use Case: Messages processing
- Use Case: Pay-off CEL contract
- Use Case: Pay-off contracts from external system
- Use Case: Pay-off REL contract
- Use Case: Write-off CEL contract
- Use Case: Write-off REL contract
