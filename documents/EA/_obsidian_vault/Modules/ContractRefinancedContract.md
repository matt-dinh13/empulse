---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1841980
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 ContractRefinancedContract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 📝 Notes

{ADD CLM-4668/}
Reference to refinanced contract.

## 🔗 Connections (5)

- ← Usage: [[Contract (Class 1858916)]]
- → Usage: [[Money (Class 1868401)]]
- → Dependency: [[REFINANCED_CONTRACT_DEFAULT (Boundary 1858922)]]
- → Dependency: [[{ADD}REFINANCED_CONTRACT_EXTENDED (Boundary 1858921)]]
- ← Usage: [[Contract (Class 1868399)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | Money |  |
| code | string |  |
| internal | boolean |  |
