---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication"
domain: "Requirements Model"
element_id: 1714569
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication

## 📝 Notes

{ADD CBL-16656 (CLM-4941)/}

This task is to integrate the following methods:
 

	
- searchCommunication
	
- searchCommunicationChannels
	
- searchCommunicationTypes


on Tab list of communications on the following shared screens:
 

	
- Contract detail
	
- Client detail
	
- Contract detail > Manage marketing offers


Integration and redirect to "new Communication detail" will be controlled by CLM Feature flag communicationFromClcModule.

Summary of changes:
 

	
- Introduce feature flag managing all related to the new comm
	
- Modify UC 07.020 to mirror the changes:
- integrate CLC searchComm
- integrate CLC searchChannels and searchTypes
	
- Add new checkbox for CLC to list of comm search panel

## 📊 Appears In (1 diagrams)

- Custom: CBL-16656 (CLM-4941) Tab List of communication - Add integration for searchCommunication
