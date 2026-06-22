---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTicketToQueue"
domain: "Modules"
element_id: 1836496
diagrams: 6
connections: 5
tags:
  - class
  - modules
---

# 🔷 {ADD}Queue

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTicketToQueue

## 📝 Notes

Defines possible queue priorities (e.g. critical, low, none).

## 🔗 Connections (5)

- ← Dependency: [[_tickets_{ticketCode}_queues]]
- ← Dependency: [[_tickets_{ticketCode}_queues_{queueCode}]]
- → Dependency: [[{ADD}QUEUE_DEFAULT]]
- ← Dependency «use»: [[{MOD}TicketInfo]]
- ← Dependency: [[{ADD}Ticket (Class 1864827)]]

## 📊 Appears In (6 diagrams)

- Logical: addTicketToQueue
- Logical: createTicket
- Logical: getTicket
- Logical: getTicketQueues
- Logical: removeTicketFromQueue
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
| priority | int |  |
