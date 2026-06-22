---
type: Class
stereotype: "REST Definition"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition"
domain: "Modules"
element_id: 1865241
diagrams: 3
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}UpsertTicketDepartment

> **Type**: Class · **Stereotype**: «REST Definition»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/addTransition

## 📝 Notes

{ADD CLM-5521/}

Department where to assign the ticket, i.e. not necessarily a newly created ticket.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}CreateTicket]]
- ← Dependency: [[{ADD}AddTicketTransition]]

## 📊 Appears In (3 diagrams)

- Logical: addTransition
- Logical: createTicket
- Logical: Request Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
