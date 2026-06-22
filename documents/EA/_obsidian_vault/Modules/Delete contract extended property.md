---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights"
domain: "Modules"
element_id: 1873976
diagrams: 5
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 Delete contract extended property

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Access Rights

## 📝 Notes

This use case describes removing extended property via REST API.

DELETE /rest/v12/contracts/{contractCode}/extended-properties/{code}

## 🔗 Connections (3)

- ← Dependency: [[Code (Interface 1840052)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- → Realisation: [[{ADD}Delete contract extended property]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-18510 (CLM-5121) CRUD API for extended properties
- Logical: deleteContractExtendedProperty
- Logical: deleteContractExtendedProperty
- Use Case: Use Cases
