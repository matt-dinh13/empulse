---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1868407
diagrams: 3
connections: 11
tags:
  - class
  - modules
---

# 🔷 ContractBusinessEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (11)

- ← Usage: [[Contract (Class 1858916)]]
- → Dependency: [[BUSINESS_EVENT_DEFAULT (Class 1858845)]]
- → Dependency: [[BUSINESS_EVENT_DEFAULT (Class 1858845)]]
- → Dependency: [[BUSINESS_EVENT_FULL (Class 1858847)]]
- → Dependency: [[BUSINESS_EVENT_FULL (Class 1858847)]]
- → Dependency: [[BUSINESS_EVENT_FULL (Class 1858847)]]
- → Dependency: [[BUSINESS_EVENT_DEFAULT (Class 1858845)]]
- → Usage: [[ContractBusinessEventUser (Class 1868400)]]
- → Usage: [[ContractBusinessEventUser (Class 1868400)]]
- ← Usage: [[Contract (Class 1868399)]]
- → Usage: [[ContractBusinessEventAttribute (Class 1868390)]]

## 📊 Appears In (3 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributes | ContractBusinessEventAttribute |  |
| businessDate | string |  |
| createdBy | ContractBusinessEventUser |  |
| creationDate | string |  |
| originatedBy | ContractBusinessEventUser |  |
| salesroomCode | string |  |
| type | string |  |
