---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queue assignment modal"
domain: "Modules"
element_id: 1799302
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Queue assignment

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queue assignment modal

## 🔗 Connections (4)

- → Dependency: [[10.033 Remove ticket from queue]]
- → Dependency: [[10.032 Add ticket to queue]]
- → Dependency: [[10.017 Get available queues]]
- → Dependency: [[10.031 Get ticket queues]]

## 📊 Appears In (1 diagrams)

- Custom: {ADD}Queue assignment modal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Priority | int |  |
| Code | string |  |
| Name | string |  |
| AssignTicketFromThisQueue | button |  |
| UnassignTicketFromThisQueue | button |  |
