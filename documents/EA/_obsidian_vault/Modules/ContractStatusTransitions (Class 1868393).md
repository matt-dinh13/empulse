---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1868393
diagrams: 3
connections: 10
tags:
  - class
  - modules
---

# 🔷 ContractStatusTransitions

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (10)

- ← Usage: [[Contract (Class 1858916)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT (Class 1858841)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT (Class 1858841)]]
- ← Usage: [[Contract (Class 1868399)]]
- → Usage: [[ContractStatusTransitionUser (Class 1868404)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT (Class 1858841)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT (Class 1858841)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT (Class 1858841)]]
- → Usage: [[ContractStatusTransitionUser (Class 1868404)]]
- → Dependency: [[STATUS_TRANSITION_DEFAULT (Class 1858841)]]

## 📊 Appears In (3 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| createdBy | ContractStatusTransitionUser |  |
| creationDate | string |  |
| notice | string |  |
| reasonCode | string |  |
| reasonText | string |  |
| requestedBy | ContractStatusTransitionUser |  |
| status | string |  |
| transferredManually | boolean |  |
