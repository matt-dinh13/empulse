---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent"
domain: "Modules"
element_id: 1801353
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 {ADD}ContactEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent

## 📝 Notes

{ADD CLM-3701/}
Element containing attributes of certain contact event.

https://clc.id00a1.cz.infra/async-api/ui/index.html?schemaUrl=%2Fasync-api%2Fschema&definition=clm%3Adefault

## 🔗 Connections (6)

- → Dependency: [[PartyRoleType (Enumeration 1801357)]]
- ← Dependency: [[PartyContactNotification (Class 1801354)]]
- → Dependency: [[EventInfo (Class 1801355)]]
- → Dependency: [[Channel (Class 1801352)]]
- → Dependency: [[ContactType (Class 1801351)]]
- → Dependency: [[BusinessProcess (Class 1801349)]]

## 📊 Appears In (1 diagrams)

- Logical: ContactEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventInfo | EventInfo |  |
| partyId | string |  |
| partyRoleType | PartyRoleType |  |
| contactSourcingSystem | string |  |
| contactTimestamp | string |  |
| externalId | string |  |
| conversationId | string |  |
| previousContactId | string |  |
| channel | Channel |  |
| contactType | ContactType |  |
| note | string |  |
| content | string |  |
| zeroBodPhoneNumber | string |  |
| businessProcess | BusinessProcess |  |
