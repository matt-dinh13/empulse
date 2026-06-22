---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/Communication/v1.0/CommunicationRecordChangedEvent"
domain: "Analysis Model"
element_id: 1647654
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationRecordChangedEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/Communication/v1.0/CommunicationRecordChangedEvent

## 📝 Notes

Event about change in communication record

Temporary data structure  about communication records changes. Once Kafka notification is created and sent based on its data, record is removed.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Communication Record Changed Event]]
- → Dependency: [[CommunicationRecordChangedEventRecord]]

## 📊 Appears In (1 diagrams)

- Logical: CommunicationRecordChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventDate | Number |  |
| record | CommunicationRecordChangedEventRecord |  |
