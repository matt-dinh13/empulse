---
type: Class
stereotype: "REST Definition"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1865243
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}UpsertTicketRelatedSubject

> **Type**: Class · **Stereotype**: «REST Definition»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 🔗 Connections (3)

- ← Dependency: [[{MOD}CreateTicket]]
- → Dependency: [[{ADD}UserRequest]]
- → Dependency: [[{ADD}RelatedSubjectSalesroom]]

## 📊 Appears In (2 diagrams)

- Logical: createTicket
- Logical: Request Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | CreateTicketRelatedSubjectType |  |
| code | string |  |
| originatedBy | UserRequest |  |
| originatedOn | RelatedSubjectSalesroom |  |
