---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1864827
diagrams: 3
connections: 17
tags:
  - class
  - modules
---

# 🔷 {ADD}Ticket

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 📝 Notes

Transferred ticket detail

## 🔗 Connections (17)

- ← Dependency: [[_tickets]]
- ← Dependency: [[_tickets_{ticketCode}]]
- → Dependency: [[Department (Class 1864846)]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- → Dependency: [[{ADD}Queue (Class 1836496)]]
- → Dependency: [[Status (Class 1864834)]]
- → Dependency: [[Type (Class 1864839)]]
- → Dependency: [[Priority (Class 1864838)]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- → Dependency: [[User (Class 1801597)]]
- → Dependency: [[{ADD}Transition]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- → Dependency: [[User (Class 1801597)]]
- → Dependency: [[Category (Class 1864825)]]
- → Dependency: [[RelatedSubject (Class 1864823)]]
- → Dependency: [[{ADD}Attachment]]
- → Dependency: [[{ADD}Queue (Class 1864820)]]

## 📊 Appears In (3 diagrams)

- Logical: createTicket
- Logical: getTicket
- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| description | string |  |
| category | Category |  |
| type | Type |  |
| department | Department |  |
| status | Status |  |
| priority | Priority |  |
| createdBy | User |  |
| assignedTo | User |  |
| {ADD}originatedBy | User |  |
| creationDate | string |  |
| relatedSubjects | RelatedSubject |  |
| queues | Queue |  |
| attachments | Attachment |  |
| transitions | Transition |  |
