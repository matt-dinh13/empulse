---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1859216
diagrams: 4
connections: 10
tags:
  - class
  - modules
---

# 🔷 ContractRefinancedContract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common

## 📝 Notes

{ADD CLM-4668/}
Reference to refinanced contract.

## 🔗 Connections (10)

- ← Dependency: [[{ADD}getRefinancedContracts]]
- ← Dependency: [[{ADD}getStatusTransitions]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[{ADD}getStatusTransitions (Class 1858898)]]
- → Dependency: [[{ADD}REFINANCED_CONTRACT_EXTENDED]]
- → Dependency: [[REFINANCED_CONTRACT_DEFAULT]]
- → Usage: [[Money (Class 1859198)]]
- ← Usage: [[Contract (Class 1859197)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Usage: [[Contract (Class 1880089)]]

## 📊 Appears In (4 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getRefinancedContracts
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| amount | Money |  |
| internal | boolean |  |
