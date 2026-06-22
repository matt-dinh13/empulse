---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Access Rights"
domain: "Analysis Model"
element_id: 1879983
diagrams: 10
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}07.040 Create communication record manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Access Rights

## 📝 Notes

The purpose of this use case is to create information about communication between client and operator of client center. Functionality is used mainly for incoming and outgoing calls, but can be used for other communication channels as well.
For purpose of understanding we differentiate between:

	
- Communication (or communication session)– whole communication event between client and operator (or other HC representative)
	
- Communication record – one part of communication between client and operator (or other HC representative). When more areas are discussed with client, then one record is created for each area. One communication can contain more Communication records.

## 🔗 Connections (8)

- ← Dependency: [[Create communication (GUIElement 1736452)]]
- → Dependency: [[Relationships between form fields]]
- → Realisation: [[07.040 Create communication record manually (Requirement 1850004)]]
- → Dependency: [[{ADD}Condition for communication record system event generation]]
- → Dependency: [[Prefilled fields for a new communication record]]
- → Realisation: [[Create communication]]
- → Realisation: [[Create communication (Screen 1716032)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: CBL-11956 (CLM-4061 ) Complaints Data and Communication Data to Hadoop
- Custom: CBL-19192 (CLM-5392) - Add create communication screen
- Custom: CBL-31177 (CLM-7629) Migrated contract support
- Custom: CBL-3917 (CLM-1508) BSL Communication - REQ #2
- Custom: CBL-8744 (CLM-2708) Show Communication List in BSL UI for CUID without any contract
- Custom: Create communication
- Custom: List of communication
- Custom: Tab - List of communication
- Use Case: Communication records
