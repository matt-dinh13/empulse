---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/getQueue"
domain: "Modules"
element_id: 1864847
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}QueueExtended

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/getQueue

## 📝 Notes

Defines ticket queue with tickets in queue and users assigned to queue.

## 🔗 Connections (4)

- ← Dependency: [[_queues]]
- ← Dependency: [[_queues_{queueCode}]]
- → Dependency: [[{ADD}QueueExtendedUser]]
- → Dependency: [[{ADD}QueueExtendedTickets]]

## 📊 Appears In (3 diagrams)

- Logical: getQueue
- Logical: listQueues
- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
| priority | int |  |
| tickets | QueueExtendedTickets |  |
| users | QueueExtendedUser[] |  |
