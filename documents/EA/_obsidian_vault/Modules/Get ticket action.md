---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model"
domain: "Modules"
element_id: 1806732
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get ticket action

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Use case model

## 📝 Notes

Input:
Contract

Steps:

	
- If Contract.Registration status = Not registered and Registration ticket does not exist and readyRegistration = True then system returns CREATE and rule ends.
	
- If Registration ticket.lastAction = CREATED and readyRegistration = False then system returns CANCEL and rule ends.
	
- If  Contract. Registration Status = Registered  and Registration ticket.lastAction = CREATED  then system returns FINISH and rule ends.
	
- System returns NO ACTION

## 🔗 Connections (1)

- ← Dependency: [[Resolve rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Registration orchestration
