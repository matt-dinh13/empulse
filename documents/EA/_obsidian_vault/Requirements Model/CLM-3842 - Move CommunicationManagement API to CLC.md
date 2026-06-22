---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3842) Move CommunicationManagement API to CLC"
domain: "Requirements Model"
element_id: 1688847
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-3842 - Move CommunicationManagement API to CLC

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3842) Move CommunicationManagement API to CLC

## 📝 Notes

ClientCommunicationHistoryWS (BSL->OSB)

	
- Add definition to CLC and change from SOAP to REST
	
- Implement new REST endpoint in BSL - */bsl/openapi/v1.0/communication/search
	
- Create swagger documentation in CLC
	
- Send swagger documentation to OSB as soon as possible to incorporate it into their upgrade of CommunicationHistory composite service from SOAP to REST

Consume new REST version of CommunicationWS (OSB->BSL) in BSL and CLC

## 📊 Appears In (1 diagrams)

- Custom: CBL-11677 (CLM-3842) Move CommunicationManagement API to CLC
