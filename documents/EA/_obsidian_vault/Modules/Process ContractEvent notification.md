---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model"
domain: "Modules"
element_id: 1806723
diagrams: 1
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 Process ContractEvent notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model

## 📝 Notes

- System receives notification Contract event.
	
- System retrieves DDM data via calling BSL REST api getDDM.
	
- System passed contract and DDM data to the use case Create registration ticket.
	
- Use case ends.

## 🔗 Connections (3)

- → Usage: [[BSL (Actor 1806726)]]
- → Dependency: [[Resolve rules]]
- ← Dependency «notify»: [[COMA (Actor 1806725)]]

## 📊 Appears In (1 diagrams)

- Use Case: Registration orchestration
