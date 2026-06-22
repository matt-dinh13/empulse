---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights"
domain: "Modules"
element_id: 1813963
diagrams: 3
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 Get communication detail

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Client Composite Communication/Access Rights

## 📝 Notes

This use case provides for getting communication detail from CLC. Sensitive data are returned only for users with special privilege.

## 🔗 Connections (5)

- → Dependency: [[getExternalCommunicationDetail (Class 1813995)]]
- → Dependency: [[createCommunication]]
- → Dependency: [[{ADD}Get communication sensitive data]]
- → Dependency: [[getCommunicationDetail (Class 1801365)]]
- ← Association: [[External system (Actor 1879374)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: getCommunicationDetail
- Use Case: Communication on external request
