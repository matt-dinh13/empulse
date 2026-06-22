---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836283
diagrams: 2
connections: 5
tags:
  - interface
  - modules
---

# 🔶 /departments

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 🔗 Connections (5)

- → Dependency: [[ErrorMessageRest]]
- → Dependency: [[{ADD}GetDepartmentRequest]]
- → Nesting «path»: [[Ticketing (Boundary 1836464)]]
- → Dependency: [[Department (Class 1864846)]]
- ← Nesting «path»: [[_departments_{departmentCode}_users]]

## 📊 Appears In (2 diagrams)

- Component: {MOD}Ticketing API
- Logical: listDepartments
