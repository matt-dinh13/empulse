---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/CommunicationRecordChangedEvent"
domain: "Modules"
element_id: 1801338
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 CommunicationRecordChangedEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/CommunicationRecordChangedEvent

## 📝 Notes

Event about change in communication record

Temporary data structure  about communication records changes. Once Kafka notification is created and sent based on its data, record is removed.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Communication Record Changed Event (Class 1801344)]]
- → Dependency: [[CommunicationRecordChangedEventRecord (Class 1801336)]]

## 📊 Appears In (1 diagrams)

- Logical: CommunicationRecordChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventDate | Number |  |
| record | CommunicationRecordChangedEventRecord |  |
