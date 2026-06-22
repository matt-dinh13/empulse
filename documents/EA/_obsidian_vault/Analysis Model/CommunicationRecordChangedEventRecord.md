---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/Communication/v1.0/CommunicationRecordChangedEvent"
domain: "Analysis Model"
element_id: 1647649
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationRecordChangedEventRecord

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/Communication/v1.0/CommunicationRecordChangedEvent

## 📝 Notes

Communication Record where an change event occurred

## 🔗 Connections (10)

- → Dependency: [[CommunicationRecordChangedEventRecordContract]]
- → Dependency: [[CommunicationRecordChangedEventRecordSubtype]]
- → Dependency: [[CommunicationRecordChangedEventRecordType]]
- → Dependency: [[CommunicationRecordChangedEventRecordUser]]
- ← Dependency: [[CommunicationRecordChangedEvent (Class 1647654)]]
- → Dependency: [[CommunicationRecordChangedEventRecordContract (Class 1647658)]]
- → Dependency: [[CommunicationRecordChangedEventRecordChannel]]
- → Dependency: [[CommunicationRecordChangedEventRecordContact]]
- → Dependency: [[CommunicationRecordChangedEventRecordResultType (Class 1647648)]]
- → Dependency: [[CommunicationRecordChangedEventRecordResultType]]

## 📊 Appears In (1 diagrams)

- Logical: CommunicationRecordChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| channel | CommunicationRecordChangedEventRecordChannel |  |
| contactUsed | CommunicationRecordChangedEventRecordContact |  |
| contract | CommunicationRecordChangedEventRecordContract |  |
| createdBy | CommunicationRecordChangedEventRecordUser |  |
| creationDate | Number |  |
| customer | CommunicationRecordChangedEventRecordCustomer |  |
| id | String |  |
| resultType | CommunicationRecordChangedEventRecordResultType |  |
| status | CommunicationRecordChangedEventRecordStatus |  |
| subtype | CommunicationRecordChangedEventRecordSubtype |  |
| type | CommunicationRecordChangedEventRecordType |  |
