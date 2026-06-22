---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights"
domain: "Modules"
element_id: 1852845
diagrams: 5
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}07.130 Get communication from external systems

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights

## 📝 Notes

{ADD CLM-3702/}
This technical, non-visual use case is used to obtain information about communication from external systems. Use case provides communication to composite OSB web-service and handles disconnecting of systems in case of repeated unavailability of any system.

## 🔗 Connections (3)

- → Realisation: [[07.130 Get communication from external systems]]
- → UseCase «include»: [[07.131 Get communication history (UseCase 1852843)]]
- ← UseCase «include»: [[{MOD}Show Tab List of communication]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CLM-3702 - Client center - Tab list of communication
- Custom: CLM-4919 REST API searchCommunication - Add OSB communication
- Use Case: Client Management
- Use Case: Communication records
