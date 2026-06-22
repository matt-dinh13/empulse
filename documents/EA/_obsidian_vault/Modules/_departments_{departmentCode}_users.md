---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836282
diagrams: 2
connections: 4
tags:
  - interface
  - modules
---

# 🔶 /departments/{departmentCode}/users

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 🔗 Connections (4)

- → Dependency: [[{ADD}DepartmentUser]]
- → Nesting «path»: [[_departments]]
- → Dependency: [[{ADD}GetDepartmentUsersRequest]]
- → Dependency: [[400]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: getDepartmentUsers
