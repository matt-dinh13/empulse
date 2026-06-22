---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Access rights"
domain: "Modules"
element_id: 1865729
diagrams: 3
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 Show Queues and tickets screen

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Access rights

## 📝 Notes

{DEL CLM-6018}Only{/DEL} for users who have a role {DEL CLM-6018}called TCK_REGISTRATION_LEADER{/DEL} {ADD CLM-6018}with the privilege {MOD}10.090 Ticket dashboard screen  assigned{/ADD}

## 🔗 Connections (3)

- → Dependency: [[{ADD}Display results pagination buttons]]
- → Dependency: [[{MOD}Queues and tickets]]
- → Realisation: [[{MOD}10.090 Ticket dashboard screen]]

## 📊 Appears In (3 diagrams)

- Custom: Access rights
- Custom: CBL-19215 (CLM-5412) Queues monitoring screen - FE
- Custom: Queues and tickets
