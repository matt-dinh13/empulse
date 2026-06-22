---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-4781 REST API getCommunication  BSL communication"
domain: "Modules"
element_id: 1800153
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-4781 REST API getCommunication - BSL communication

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-4781 REST API getCommunication  BSL communication

## 📝 Notes

Goal of this is to develop a composite GET rest API getCommunication:
 

	
- path: *v1/communication/{system}/{communicationId}
	
- define response object (common part  + system specific part)
	
- integrate system CLC


	
- support masking of usedContract (introduce role and privilege)
    - introduce role  - CLC_API_RO, CLC_API_RO_SENSITIVE_DATA

## 📊 Appears In (1 diagrams)

- Custom: CLM-4781 REST API getCommunication - BSL communication
