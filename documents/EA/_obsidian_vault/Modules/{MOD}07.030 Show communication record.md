---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights"
domain: "Modules"
element_id: 1852847
diagrams: 5
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 {MOD}07.030 Show communication record

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights

## 📝 Notes

Purpose of this use case is to show detail of a communication record. This is a visual use case.

## 🔗 Connections (8)

- ← Realisation: [[Show communication record (Screen 1801257)]]
- → Dependency: [[Finish]]
- → Realisation: [[07.030 Show detail of communication]]
- → UseCase «include»: [[07.120 Show communication ticket list v2]]
- → Dependency «invokes»: [[{MOD}07.050 Update communication record]]
- → Dependency: [[Get communication contact algorithm (Boundary 1852867)]]
- → Realisation: [[{ADD}Get communication sensitive data (Requirement 1850007)]]
- ← Association: [[User (Actor 1879373)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: Create communication
- Custom: Show communication record
- Use Case: Communication records
- Use Case: Manage communication tickets - Use Case
