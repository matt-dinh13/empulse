---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions"
domain: "Modules"
element_id: 1836537
diagrams: 6
connections: 7
tags:
  - class
  - modules
---

# 🔷 RelatedSubject

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions

## 📝 Notes

Related Subjects of the Ticket, used in requests to create a subject related to a ticket(/rest/relatedsubjects endpoint) or when creating a ticket(rest/Ticket/create).

## 🔗 Connections (7)

- ← Dependency: [[RelatedSubjects]]
- ← Dependency: [[TicketCounts (Class 1836113)]]
- ← Usage: [[Ticket (Class 1836532)]]
- → Usage: [[SubjectType (Class 1836551)]]
- ← Usage: [[TicketInfo]]
- ← Aggregation: [[RelatedSubject (Class 1836547)]]
- ← Dependency: [[TicketRequest]]

## 📊 Appears In (6 diagrams)

- Logical: Schema definitions
- Logical: Ticketing - Create mistake ticket API usage
- Logical: Ticketing - Get ticket counts
- Logical: Ticketing - Get Ticket details
- Logical: Ticketing - Related subjects API usage
- Logical: TicketManagement - Create ticket overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| arrangedByName | string |  |
| code | string |  |
| subjectType | Code |  |
| ticketCode | string |  |
