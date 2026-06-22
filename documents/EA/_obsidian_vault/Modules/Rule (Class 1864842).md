---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses"
domain: "Modules"
element_id: 1864842
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses

## 🔗 Connections (8)

- → Dependency: [[{ADD}RULE_DEFAULT]]
- → Dependency: [[Flow (Class 1864845)]]
- → Dependency: [[Department (Class 1864846)]]
- → Dependency: [[Department (Class 1864846)]]
- ← Dependency: [[{MOD}TicketInfo]]
- → Dependency: [[Status (Class 1864834)]]
- → Dependency: [[Status (Class 1864834)]]
- → Dependency: [[ActionLabel (Class 1864822)]]

## 📊 Appears In (2 diagrams)

- Logical: ResponsesV2
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| flow | Flow |  |
| fromStatus | Status |  |
| toStatus | Status |  |
| fromDepartment | Department |  |
| toDepartment | Department |  |
| commentPreference | string |  |
| actionLabel | ActionLabel |  |
