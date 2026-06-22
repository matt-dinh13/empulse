---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queues and tickets"
domain: "Modules"
element_id: 1868192
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}Tickets

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queues and tickets

## 📝 Notes

{ADD CLM-6018/}
Renamed from Registration tickets

## 🔗 Connections (2)

- → Dependency: [[Show Queue detail]]
- → Dependency: [[actions]]

## 📊 Appears In (1 diagrams)

- Custom: Queues and tickets

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | string |  |
| ContractCode | link |  |
| Queues | link[] |  |
| AgentName | string |  |
| AllocationDate | date |  |
| CompletionDate | date |  |
| Duration | string |  |
| Actions | button[] |  |
