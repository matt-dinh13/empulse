---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model"
domain: "Modules"
element_id: 1806719
diagrams: 1
connections: 2
tags:
  - usecase
  - modules
---

# 🎯 Send Contract Registration Action Resolved Event 

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model

## 📝 Notes

- System gets queues for contract by calling the rule Get contract queues with contract with contract and DDM data.
	
- System calls the rule Get ticket action to check if there is action needed regarding registration ticket.
- If rule returns value <> NO ACTION then system:
- sends notification RegistrationTicket
- update or create Registration ticket database entry with last taken action
	
- Use case ends

## 🔗 Connections (2)

- → Dependency «notify»: [[Allocation tool]]
- ← Dependency: [[Resolve rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Registration orchestration
