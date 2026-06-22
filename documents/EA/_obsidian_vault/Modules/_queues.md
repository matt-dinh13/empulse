---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836089
diagrams: 2
connections: 7
tags:
  - interface
  - modules
---

# 🔶 /queues

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

To use this endpoint, user must have a role with UC10_017 privilege.

GET https://tck.in00c1.in.infra/tck/rest/v2/queues?myOnly=true

## 🔗 Connections (7)

- → Nesting «path»: [[Ticketing (Boundary 1836464)]]
- → Dependency: [[403]]
- → Dependency: [[400]]
- → Dependency: [[{ADD}QueueExtended]]
- ← Nesting «path»: [[_queues_users]]
- ← Nesting «path»: [[_queues_{queueCode}]]
- ← Realisation: [[10.017 Get available queues]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: listQueues
