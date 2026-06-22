---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent"
domain: "Modules"
element_id: 1801352
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Channel

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent

## 📝 Notes

Element containing attributes of the communication channel used certain contact.

## 🔗 Connections (3)

- → Dependency: [[Create PartyContactNotification (Requirement 1801358)]]
- ← Dependency: [[{ADD}ContactEvent]]
- → Dependency: [[ChannelDetails (Class 1801350)]]

## 📊 Appears In (1 diagrams)

- Logical: ContactEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| channelType | string |  |
| channelDetails | ChannelDetails |  |
