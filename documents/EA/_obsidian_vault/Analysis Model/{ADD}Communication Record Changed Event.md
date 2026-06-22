---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/Communication/v1.0/CommunicationRecordChangedEvent"
domain: "Analysis Model"
element_id: 1647652
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Communication Record Changed Event

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/Communication/v1.0/CommunicationRecordChangedEvent

## 📝 Notes

{ADD CLM-4180/}
Kafka notification about created and changed communication record. 

https://clc.id00a1.cz.infra/async-api/avro-schema?javaType=net.homecredit.clc.api.async.avro.event.communication.record.v1.CommunicationRecordChangedEventV1

https://clc.id00a1.cz.infra/async-api/ui/index.html?schemaUrl=%2Fasync-api%2Fschema&definition=clm%3Adefault

## 🔗 Connections (1)

- → Dependency: [[CommunicationRecordChangedEvent (Class 1647654)]]

## 📊 Appears In (1 diagrams)

- Logical: CommunicationRecordChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Communication event type | String |  |
| Communication event source | String |  |
| B3 | String |  |
| Communication event time | String |  |
| Communication event partioning key | String |  |
| Communication event specification version | String |  |
| Communication event id | String |  |
| Content type | String |  |
| Communication event subject | String |  |
| record | CommunicationRecordChangedEvent |  |
