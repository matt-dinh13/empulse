---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights"
domain: "Modules"
element_id: 1813962
diagrams: 3
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Search communication

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights

## 📝 Notes

This use case provides for searching communication from an internal or an external system. Sensitive data are returned only for users with special privilege.

## 🔗 Connections (5)

- → Dependency: [[{ADD}Get communication sensitive data]]
- → Dependency: [[searchCommunication (Class 1801391)]]
- → Dependency: [[{ADD}Search communication data]]
- → Dependency: [[External Reference (Boundary 1813999)]]
- ← Usage: [[External system (Actor 1879374)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: searchCommunication
- Use Case: Communication on external request
