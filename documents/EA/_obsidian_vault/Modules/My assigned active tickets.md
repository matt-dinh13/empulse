---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/My overview"
domain: "Modules"
element_id: 1868148
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 My assigned active tickets

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/My overview

## 🔗 Connections (4)

- → Dependency: [[10.010 Search for tickets (UseCase 1865722)]]
- → Dependency: [[Show User assignment modal]]
- → Dependency: [[10.010 Search for tickets (UseCase 1865722)]]
- → Dependency: [[10.030 Show ticket detail (UseCase 1865662)]]

## 📊 Appears In (1 diagrams)

- Custom: {ADD}My overview form

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | string |  |
| Code | string |  |
| Category | string |  |
| Type | string |  |
| Queues[] | Queue |  |
| ModifiedAt | date |  |
| UnassignFromThisTicket | button |  |
| TicketDetail | button |  |
