---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1864823
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 RelatedSubject

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 📝 Notes

Definition of subject related to ticket

## 🔗 Connections (4)

- ← Dependency: [[{ADD}Ticket (Class 1864827)]]
- → Dependency: [[RelatedSubjectType (Class 1864828)]]
- ← Usage: [[{MOD}TicketInfo]]
- → Dependency: [[RELATED_SUBJECT_DEFAULT]]

## 📊 Appears In (4 diagrams)

- Logical: createTicket
- Logical: getTicket
- Logical: ResponsesV2
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | RelatedSubjectType |  |
| code | string |  |
