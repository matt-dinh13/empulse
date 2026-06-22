---
type: Class
stereotype: "REST Definition"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition"
domain: "Modules"
element_id: 1865245
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}AddTicketTransition

> **Type**: Class · **Stereotype**: «REST Definition»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition

## 🔗 Connections (4)

- ← Dependency: [[_tickets_{ticketCode}_transitions]]
- → Dependency: [[{ADD}UserRequest]]
- → Dependency: [[{ADD}UpsertTicketStatus]]
- → Dependency: [[{ADD}UpsertTicketDepartment]]

## 📊 Appears In (2 diagrams)

- Logical: addTransition
- Logical: Request Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| department | UpsertTicketDepartment |  |
| status | UpsertTicketStatus |  |
| comment | string |  |
| originatedBy | UserRequest |  |
