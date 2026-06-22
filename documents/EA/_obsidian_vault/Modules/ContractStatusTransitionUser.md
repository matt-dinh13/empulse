---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1859202
diagrams: 5
connections: 3
tags:
  - class
  - modules
---

# 🔷 ContractStatusTransitionUser

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (3)

- → Dependency: [[STATUS_TRANSITION_DEFAULT]]
- ← Usage: [[ContractStatusTransitions]]
- ← Usage: [[ContractStatusTransitions]]

## 📊 Appears In (5 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getStatusTransitions
- Logical: getStatusTransitions
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commonName | string |  |
| employeeNumber | string |  |
| uid | string |  |
