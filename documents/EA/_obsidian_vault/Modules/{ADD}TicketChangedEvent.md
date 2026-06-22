---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedEvent"
domain: "Modules"
element_id: 1802473
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}TicketChangedEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedEvent

## 📝 Notes

{ADD CLM-4457/}
Kafka notification about significant changes on contract.

https://tck.id00a1.cz.infra/tck/async-api/avro-schema?javaType=net.homecredit.tck.api.async.avro.ticket.event.v1.TicketChangedEventV1

## 🔗 Connections (1)

- → Dependency: [[TicketEvent (Class 1802472)]]

## 📊 Appears In (1 diagrams)

- Logical: TicketChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| B3 | String |  |
| Event type | String |  |
| Event source | String |  |
| Event time | String |  |
| Event partioning key | String |  |
| Event specification version | String |  |
| Event id | String |  |
| Content type | String |  |
| Event subject | String |  |
| Data | TicketEvent |  |
| modifiedBy | User |  |
