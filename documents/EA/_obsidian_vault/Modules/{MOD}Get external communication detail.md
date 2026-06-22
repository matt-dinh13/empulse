---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights"
domain: "Modules"
element_id: 1813964
diagrams: 3
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Get external communication detail

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights

## 📝 Notes

This use case provides for getting communication detail from an external system. Sensitive data are returned only for users with special privilege.

## 🔗 Connections (4)

- → Dependency: [[{ADD}Get communication sensitive data]]
- → Dependency: [[External Reference (Boundary 1813999)]]
- → Dependency: [[getExternalCommunicationDetail (Class 1813995)]]
- ← Association: [[External system (Actor 1879374)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: getExternalCommunicationDetail
- Use Case: Communication on external request
