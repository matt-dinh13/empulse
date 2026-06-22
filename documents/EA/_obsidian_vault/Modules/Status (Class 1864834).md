---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1864834
diagrams: 4
connections: 6
tags:
  - class
  - modules
---

# 🔷 Status

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 📝 Notes

Defines possible ticket statuses (e.g. ASSIGNED, CLOSED, OPEN).

## 🔗 Connections (6)

- ← Dependency: [[Rule (Class 1864842)]]
- ← Dependency «use»: [[{MOD}TicketInfo]]
- ← Dependency: [[Rule (Class 1864842)]]
- ← Dependency: [[{ADD}Transition]]
- → Dependency: [[DEFAULT (Class 1836686)]]
- ← Dependency: [[{ADD}Ticket (Class 1864827)]]

## 📊 Appears In (4 diagrams)

- Logical: createTicket
- Logical: getTicket
- Logical: ResponsesV2
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
