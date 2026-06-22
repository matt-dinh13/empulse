---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification"
domain: "Analysis Model"
element_id: 1628569
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ContactEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification

## 📝 Notes

Element containing attributes of certain contact event.

## 🔗 Connections (6)

- → Dependency: [[BusinessProcess (Class 1628565)]]
- → Dependency: [[Channel (Class 1628564)]]
- → Dependency: [[EventInfo (Class 1628563)]]
- → Dependency: [[PartyRoleType (Enumeration 1628571)]]
- ← Dependency: [[PartyContactNotification (Class 1628568)]]
- → Dependency: [[ContactType (Class 1628567)]]

## 📊 Appears In (1 diagrams)

- Logical: PartyContactNotification

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
| businessProcess | BusinessProcess |  |
