---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Access Rights"
domain: "Analysis Model"
element_id: 1879998
diagrams: 11
connections: 11
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}07.020 Show list of communication

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Access Rights

## 📝 Notes

The purpose of the use case is to show planned or processed communication records for selected client or selected contract. This use case cannot be invoked directly by the user, it is a part of invoking:

	
- UC 01.210 Show contract detail
	
- UC 06.030 Show client data


Use case doesn't show communication from BSL only, but it also obtains history from other systems (such as message server) and thereby provides to user consolidated view on communication between Home Credit and client.

## 🔗 Connections (7)

- ← InformationFlow: [[REQ#1 - List of communication filtering]]
- ← Dependency: [[REQ#1 - Add CommunicationID column in the List of communication grid]]
- ← Dependency: [[List of communication (GUIElement 1714135)]]
- ← Realisation: [[Tab - List of communication (Screen 1736453)]]
- → Realisation: [[07.020 Show list of communication]]
- → UseCase «include»: [[07.130 Get communication from external systems (UseCase 1880003)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication
- Custom: CBL-2204 (CLM-1029) Filtering contact information in BSL
- Custom: CBL-4715 (CLM-1710) BSL Communications Identifier
- Custom: CBL-5351 (CLM-1840) Archiving BSL Communication records
- Custom: CBL-8744 (CLM-2708) Show Communication List in BSL UI for CUID without any contract
- Custom: CBL-9201 (CLM-2831) Adjust visibility of external data in Comm.list
- Custom: List of communication
- Custom: Tab - List of communication
- Use Case: Communication records
- Use Case: Use case model
