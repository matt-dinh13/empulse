---
type: UseCase
stereotype: "CLM"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14504 (CLM-5127) Asynchronous contract activation"
domain: "Requirements Model"
element_id: 1879758
diagrams: 7
connections: 4
tags:
  - usecase
  - requirements-model
---

# 🎯 Process ContractRegisteredSE [CLM]

> **Type**: UseCase · **Stereotype**: «CLM»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14504 (CLM-5127) Asynchronous contract activation

## 📝 Notes

This use case describes contract entity post-processing based on notification ContractRegisteredSE.

## 🔗 Connections (3)

- ← Dependency «flow»: [[{MOD}ContractRegisteredSE]]
- ← Association: [[System event]]
- ← UseCase: [[REM (Actor 1880881)]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
- Custom: CBL-16401 (CLM-4704) - Process Kafka contract register
- Custom: CBL-17316 (CLM-5164) Registration based on REM module
- Use Case: Activation of contract on a repayment
- Use Case: Client update
- Use Case: Contract registration
- Use Case: Processing of ContractSystemEvents
