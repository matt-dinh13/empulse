---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Resources"
domain: "Modules"
element_id: 1836080
diagrams: 7
connections: 10
tags:
  - class
  - modules
---

# 🔷 Tickets

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Resources

## 🔗 Connections (10)

- → Dependency: [[TicketRequest]]
- → Dependency: [[10.032 Show ticket detail service]]
- → Usage: [[Ticket (Class 1836532)]]
- → Dependency: [[{MOD}10.022 Create ticket service]]
- → Usage: [[GetTicketRequest]]
- → Usage: [[Ticket (Class 1836532)]]
- ← Dependency: [[Ticketing (Class 1836116)]]
- ← Dependency: [[10.050 Assign ticket to department]]
- ← Dependency: [[10.080 Create mistake ticket (UseCase 1865686)]]
- ← Dependency: [[10.030 Show ticket detail (UseCase 1865662)]]

## 📊 Appears In (7 diagrams)

- Logical: Resources
- Logical: Ticketing - Assign ticket to department API usage
- Logical: Ticketing - Create mistake ticket API usage
- Logical: Ticketing - Create ticket overview (with TypeSpecification)
- Logical: Ticketing - Get Ticket details
- Logical: Ticketing API overview
- Logical: TicketManagement - Create ticket overview
