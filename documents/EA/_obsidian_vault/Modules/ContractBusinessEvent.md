---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1859213
diagrams: 7
connections: 15
tags:
  - class
  - modules
---

# 🔷 ContractBusinessEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (15)

- → Aggregation: [[BusinessEventsResponse]]
- ← Dependency: [[Contract (Interface 1839994)]]
- → Aggregation: [[BusinessEventsResponse (Class 1858885)]]
- → Dependency: [[BUSINESS_EVENT_DEFAULT]]
- → Dependency: [[BUSINESS_EVENT_FULL]]
- → Dependency: [[BUSINESS_EVENT_FULL]]
- → Usage: [[ContractBusinessEventAttribute]]
- → Dependency: [[BUSINESS_EVENT_FULL]]
- → Dependency: [[BUSINESS_EVENT_DEFAULT]]
- → Dependency: [[BUSINESS_EVENT_DEFAULT]]
- → Usage: [[ContractBusinessEventUser]]
- → Usage: [[ContractBusinessEventUser]]
- ← Usage: [[Contract (Class 1859197)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Usage: [[Contract (Class 1880089)]]

## 📊 Appears In (7 diagrams)

- Logical: ContractChangedEvent
- Logical: createBusinessEvent
- Logical: createBusinessEvent
- Logical: getBusinessEvents
- Logical: getBusinessEvents
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
