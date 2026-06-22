---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket"
domain: "Modules"
element_id: 1864821
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}Attachment

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/tickets/createTicket

## 🔗 Connections (3)

- → Dependency: [[{ADD}User (Class 1864832)]]
- → Dependency: [[{ADD}User (Class 1864832)]]
- ← Dependency: [[{ADD}Ticket (Class 1864827)]]

## 📊 Appears In (3 diagrams)

- Logical: createTicket
- Logical: getTicket
- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| fileName | string |  |
| externalId | string |  |
| comment | string |  |
| createdBy | User |  |
| originatedBy | User |  |
| creationDate | string |  |
