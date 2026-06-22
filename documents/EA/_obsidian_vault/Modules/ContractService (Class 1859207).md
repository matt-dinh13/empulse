---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1859207
diagrams: 4
connections: 6
tags:
  - class
  - modules
---

# 🔷 ContractService

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (6)

- ← Dependency: [[Contract (Interface 1839994)]]
- → Dependency: [[SERVICE_DEFAULT]]
- ← Usage: [[Contract (Class 1859197)]]
- → Usage: [[{ADD}ServiceDefinition]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Usage: [[Contract (Class 1880089)]]

## 📊 Appears In (4 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getContractServices
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}serviceDefinition | {ADD}ServiceDefinition |  |
| id | string |  |
