---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1868403
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 ContractExtendedProperty

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (4)

- ← Usage: [[Contract (Class 1858916)]]
- ← Dependency: [[{ADD}createContractRequest]]
- → Dependency: [[EXTENDED_PROPERTIES_DEFAULT (Class 1858838)]]
- ← Usage: [[Contract (Class 1868399)]]

## 📊 Appears In (4 diagrams)

- Logical: ContractChangedEvent
- Logical: createContract
- Logical: getContract
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| value | string |  |
