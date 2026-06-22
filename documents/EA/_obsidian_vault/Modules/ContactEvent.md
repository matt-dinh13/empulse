---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification"
domain: "Modules"
element_id: 1545330
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 ContactEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification

## 📝 Notes

Element containing attributes of certain contact event.

## 🔗 Connections (6)

- → Dependency: [[ContactType]]
- → Dependency: [[BusinessProcess]]
- ← Dependency: [[PartyContactNotification (Class 1545333)]]
- → Dependency: [[EventInfo]]
- → Dependency: [[PartyRoleType]]
- → Dependency: [[Channel (Class 1545327)]]

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
| zeroBodPhoneNumber | string |  |
| businessProcess | BusinessProcess |  |
