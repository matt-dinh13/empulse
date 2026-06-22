---
type: Class
stereotype: "REST Definition"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1836614
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {MOD}CreateTicket

> **Type**: Class · **Stereotype**: «REST Definition»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 🔗 Connections (5)

- → Dependency: [[{ADD}UpsertTicketDepartment]]
- → Dependency: [[{ADD}UserRequest]]
- → Dependency: [[{ADD}UpsertTicketRelatedSubject]]
- → Dependency: [[CreateTicketType]]
- → Dependency: [[CreateTicketQueue]]

## 📊 Appears In (1 diagrams)

- Logical: createTicket

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | CreateTicketType |  |
| department | UpsertTicketDepartment |  |
| description | string |  |
| originatedBy | UserRequest |  |
| queues | CreateTicketQueue |  |
| relatedSubjects | {ADD}UpsertTicketRelatedSubject |  |
