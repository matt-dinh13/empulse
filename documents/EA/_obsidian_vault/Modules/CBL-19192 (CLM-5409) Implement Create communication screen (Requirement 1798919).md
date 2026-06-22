---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-19192 (CLM-5409) Implement Create communication screen"
domain: "Modules"
element_id: 1798919
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CBL-19192 (CLM-5409) Implement Create communication screen

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-19192 (CLM-5409) Implement Create communication screen

## 📝 Notes

Goal of this task is to implement Create communication record screen for non client communication in CLC module:

Client center
UC 07.040 Create communication record:

	
- gui validation
	
- Subtype spec, Subtype subspec mandatory when they have values on PH
	
- communication creation based on CLC backend (CLM-5344)
	
- add support for Kafka communication changed event streaming
	
- communication input parameters:

- no input parameter -> non client communication: non- client communication should have special channels on PH

	
- sessions and contract/client communication not supported


Actions
Only two button should be available:

	
- New record
	
- Finish


Full analysis is here - CLM-5392

## 📊 Appears In (1 diagrams)

- Custom: CBL-19192 (CLM-5409) Implement Create communication screen
