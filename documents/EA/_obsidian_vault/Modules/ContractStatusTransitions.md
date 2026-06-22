---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1859200
diagrams: 5
connections: 14
tags:
  - class
  - modules
---

# 🔷 ContractStatusTransitions

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (14)

- ← Usage: [[{ADD}getStatusTransitions]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Usage: [[{ADD}getStatusTransitions (Class 1858898)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- → Usage: [[ContractStatusTransitionUser]]
- → Usage: [[ContractStatusTransitionUser]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- ← Usage: [[Contract (Class 1859197)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Usage: [[Contract (Class 1880089)]]

## 📊 Appears In (5 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getStatusTransitions
- Logical: getStatusTransitions
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | string |  |
| reasonCode | string |  |
| reasonText | string |  |
| notice | string |  |
| creationDate | string |  |
| transferredManually | boolean |  |
| createdBy | ContractStatusTransitionUser |  |
| requestedBy | ContractStatusTransitionUser |  |
