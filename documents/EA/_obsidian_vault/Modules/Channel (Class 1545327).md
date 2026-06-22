---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification"
domain: "Modules"
element_id: 1545327
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Channel

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification

## 📝 Notes

Element containing attributes of the communication channel used certain contact.

## 🔗 Connections (3)

- → Dependency: [[ChannelDetails]]
- ← Dependency: [[ContactEvent]]
- → Dependency: [[Create PartyContactNotification]]

## 📊 Appears In (1 diagrams)

- Logical: PartyContactNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| channelType | string |  |
| channelDetails | ChannelDetails |  |
