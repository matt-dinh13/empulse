---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights"
domain: "Modules"
element_id: 1852836
diagrams: 7
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Show Tab List of communication

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights

## 📝 Notes

{ADD CLM-3701}
Goal of this use case is to display tab List of communication. This tab is populated with communication records based on the use case Search communication.

## 🔗 Connections (4)

- ← Dependency: [[List of communication (GUIElement 1801244)]]
- → Realisation: [[07.020 Show list of communication (Requirement 1850041)]]
- → UseCase «include»: [[{ADD}07.130 Get communication from external systems]]
- ← Dependency: [[{MOD}06.030 Show Client Data (UseCase 1878935)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CLM-3702 - Client center - Tab list of communication
- Custom: CLM-5002 - Add support for re-direct to new Communication detail
- Custom: List of communication
- Logical: External Reference
- Use Case: Client Management
- Use Case: Communication records
