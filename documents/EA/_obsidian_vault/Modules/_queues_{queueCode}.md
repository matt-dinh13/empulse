---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836088
diagrams: 2
connections: 6
tags:
  - interface
  - modules
---

# 🔶 /queues/{queueCode}

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

To use this endpoint, user must have a role with {ADD}10.017 Get available Queues privilege.

GET https://tck.in00c1.in.infra/tck/rest/v2/queues/<queueCode>?projection=TICKET_DEFAULT

## 🔗 Connections (6)

- → Dependency: [[10.017 Get queue]]
- → Dependency: [[{ADD}QueueExtended]]
- → Dependency: [[400]]
- → Nesting «path»: [[_queues]]
- → Dependency: [[403]]
- ← Nesting «path»: [[_queues_{queueCode}_user_{userLogin}]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: getQueue
