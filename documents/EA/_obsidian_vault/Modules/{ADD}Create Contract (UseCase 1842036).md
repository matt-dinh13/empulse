---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Access Rights"
domain: "Modules"
element_id: 1842036
diagrams: 4
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Create Contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Access Rights

## 📝 Notes

{ADD CLM-6660/}
This use case describes how to create a contract in COMA NG via REST API.

POST /rest/v1/contracts

## 🔗 Connections (4)

- → Dependency: [[{ADD}Set contract default ownership]]
- → Realisation: [[{ADD}Create Contract]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← UseCase: [[External system (Actor 1869946)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: createContract
- Use Case: Create Contract - Use Case Model
- Use Case: Use Cases
