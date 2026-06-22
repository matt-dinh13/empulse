---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1873970
diagrams: 6
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 Update contract extended property

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights

## 📝 Notes

This use case describes updating extended property via REST API.

PUT /rest/v12/contracts/{contractCode}/extended-properties

## 🔗 Connections (4)

- ← Dependency: [[{ADD}updateExtendedProperty]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- → Realisation: [[{ADD}Update contract extended property]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-18510 (CLM-5121) CRUD API for extended properties
- Logical: updateContractExtendedProperty
- Logical: updateContractExtendedProperty
- Logical: updateContractExtendedProperty
- Use Case: Use Cases
