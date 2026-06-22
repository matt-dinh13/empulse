---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836087
diagrams: 3
connections: 7
tags:
  - interface
  - modules
---

# 🔶 /queues/{queueCode}/user/{userLogin}

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

To use this endpoint, user must have a role with UC10_018 or UC10_019 privilege, respectively.

PUT or DELETE https://tck.in00c1.in.infra/tck/rest/v2/queues/<queueCode>/users/<userLogin>

## 🔗 Connections (7)

- → Dependency: [[200]]
- → Dependency: [[{ADD}QueueExtendedUser]]
- → Nesting «path»: [[_queues_{queueCode}]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- → Dependency: [[{ADD}ErrorMessageRestApi]]
- ← Realisation: [[10.018 Assign user into queue]]
- ← Realisation: [[10.019 Unassign user from queue]]

## 📊 Appears In (3 diagrams)

- Component: {MOD}Ticketing API
- Logical: assignUserIntoQueue
- Logical: unassignUserFromQueue
