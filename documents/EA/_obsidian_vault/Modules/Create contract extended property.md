---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1873977
diagrams: 6
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 Create contract extended property

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights

## 📝 Notes

This use case describes creating contract extended property via REST API.

POST /rest/v12/contracts/{contractCode}/extended-properties

## 🔗 Connections (4)

- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- → Realisation: [[{ADD}Create contract extended property]]
- → Dependency: [[{ADD}createExtendedProperty (Boundary 1873990)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-18510 (CLM-5121) CRUD API for extended properties
- Logical: createContractExtendedProperty
- Logical: createContractExtendedProperty
- Logical: createContractExtendedProperty
- Use Case: Use Cases
