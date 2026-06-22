---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition"
domain: "Modules"
element_id: 1864841
diagrams: 5
connections: 9
tags:
  - class
  - modules
---

# 🔷 {ADD}Transition

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition

## 📝 Notes

Definition of transition history on top of some ticket

## 🔗 Connections (9)

- ← Dependency: [[_tickets_{ticketCode}_transitions]]
- ← Dependency: [[{MOD}TicketInfo]]
- → Dependency: [[{ADD}TRANSITION_DEFAULT]]
- → Dependency: [[Department (Class 1864846)]]
- → Dependency: [[Status (Class 1864834)]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- ← Dependency: [[{ADD}Ticket (Class 1864827)]]

## 📊 Appears In (5 diagrams)

- Logical: addTransition
- Logical: createTicket
- Logical: getTicket
- Logical: ResponsesV2
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creationDate | string |  |
| department | Department |  |
| status | Status |  |
| assignedTo | User |  |
| createdBy | User |  |
| originatedBy | User |  |
| comment | string |  |
