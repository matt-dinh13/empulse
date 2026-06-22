---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1864846
diagrams: 5
connections: 7
tags:
  - class
  - modules
---

# 🔷 Department

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 📝 Notes

Department which can access the Ticket

## 🔗 Connections (7)

- ← Dependency: [[_departments]]
- → Dependency: [[DEFAULT (Class 1836686)]]
- ← Dependency «use»: [[{MOD}TicketInfo]]
- ← Dependency: [[Rule (Class 1864842)]]
- ← Dependency: [[Rule (Class 1864842)]]
- ← Dependency: [[{ADD}Transition]]
- ← Dependency: [[{ADD}Ticket (Class 1864827)]]

## 📊 Appears In (5 diagrams)

- Logical: createTicket
- Logical: getTicket
- Logical: listDepartments
- Logical: ResponsesV2
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
