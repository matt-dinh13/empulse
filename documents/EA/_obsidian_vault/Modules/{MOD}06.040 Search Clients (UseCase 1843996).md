---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Access Rights"
domain: "Modules"
element_id: 1843996
diagrams: 6
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}06.040 Search Clients

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Access Rights

## 📝 Notes

Purpose of this use case is to find clients based on defined searching criteria. Searching can be done in BSL or in CIF (see scenario).

## 🔗 Connections (10)

- ← Dependency: [[Search Clients (Screen 1799878)]]
- ← Dependency: [[{ADD}Search clients]]
- → Dependency: [[{MOD}Mask client data]]
- → Realisation: [[{ADD}06.040 Search clients by Name and Date of birth (Requirement 1799861)]]
- → Realisation: [[06.040 Search clients (Requirement 1799862)]]
- → Dependency: [[Get alias number instead of original for Unique Id document]]
- → Realisation: [[{ADD}06.030 Show client data (display Gender) (Requirement 1799864)]]
- → Realisation: [[{ADD}06.030 Show client data (display Parent name) (Requirement 1799863)]]
- → Realisation: [[{ADD}06.030 Show client data (display Date of birth) (Requirement 1799860)]]
- ← Association: [[User (Actor 1879373)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-11677 (CLM-3730) - Client center - Menu
- Custom: Client detail
- Custom: CLM-4266 - Personal data masking
- Custom: Search Clients
- Use Case: Client Search
