---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model"
domain: "Modules"
element_id: 1806727
diagrams: 1
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 Resolve rules

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model

## 🔗 Connections (6)

- → Dependency: [[Get ticket action]]
- → Dependency: [[Get contract queue]]
- ← Dependency: [[Process ContractEvent notification]]
- → Dependency: [[Create Registration ticket]]
- ← Dependency: [[Process KafkaDDM notification]]
- → Dependency: [[Send Contract Registration Action Resolved Event]]

## 📊 Appears In (1 diagrams)

- Use Case: Registration orchestration
