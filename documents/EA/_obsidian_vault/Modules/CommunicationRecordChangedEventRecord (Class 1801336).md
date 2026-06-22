---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/CommunicationRecordChangedEvent"
domain: "Modules"
element_id: 1801336
diagrams: 1
connections: 10
tags:
  - class
  - modules
---

# 🔷 CommunicationRecordChangedEventRecord

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/CommunicationRecordChangedEvent

## 📝 Notes

Communication Record where an change event occurred

## 🔗 Connections (10)

- → Dependency: [[CommunicationRecordChangedEventRecordChannel (Class 1801345)]]
- → Dependency: [[CommunicationRecordChangedEventRecordResultType (Class 1801341)]]
- → Dependency: [[CommunicationRecordChangedEventRecordUser (Class 1801342)]]
- → Dependency: [[CommunicationRecordChangedEventRecordContract (Class 1801339)]]
- → Dependency: [[CommunicationRecordChangedEventRecordContract (Class 1801346)]]
- → Dependency: [[CommunicationRecordChangedEventRecordResultType (Class 1801343)]]
- → Dependency: [[CommunicationRecordChangedEventRecordContact (Class 1801340)]]
- ← Dependency: [[CommunicationRecordChangedEvent (Class 1801338)]]
- → Dependency: [[CommunicationRecordChangedEventRecordSubtype (Class 1801337)]]
- → Dependency: [[CommunicationRecordChangedEventRecordType (Class 1801335)]]

## 📊 Appears In (1 diagrams)

- Logical: CommunicationRecordChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contactUsed | CommunicationRecordChangedEventRecordContact |  |
| contract | CommunicationRecordChangedEventRecordContract |  |
| createdBy | CommunicationRecordChangedEventRecordUser |  |
| creationDate | Number |  |
| customer | CommunicationRecordChangedEventRecordCustomer |  |
| channel | CommunicationRecordChangedEventRecordChannel |  |
| id | String |  |
| resultType | CommunicationRecordChangedEventRecordResultType |  |
| status | CommunicationRecordChangedEventRecordStatus |  |
| subtype | CommunicationRecordChangedEventRecordSubtype |  |
| type | CommunicationRecordChangedEventRecordType |  |
