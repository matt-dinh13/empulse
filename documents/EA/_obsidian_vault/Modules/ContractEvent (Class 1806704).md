---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Interface provided"
domain: "Modules"
element_id: 1806704
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ContractEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Interface provided

## 📝 Notes

Business events recorded on the Contract. Only events defined in UC 01.757 Get contracts for self-care are taken into account and returned by this structure.

## 🔗 Connections (4)

- → Dependency: [[User (Class 1806703)]]
- → Dependency: [[User (Class 1806703)]]
- → Dependency: [[ContractEventAttribute (Class 1806701)]]
- ← Dependency: [[Contract (Class 1806698)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Registration Action Resolved Event

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| eventDate | dateTime |  |
| salesroomCode | string |  |
| createdBy | User |  |
| attributes | ContractEventAttribute |  |
| originatedBy | User |  |
