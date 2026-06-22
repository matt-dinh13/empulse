---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-31359 (CSI-4575) LIMO, REL Limit Management"
domain: "Requirements Model"
element_id: 1881469
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 BRPH-2824 – [Phase 1][LIMO] REL Limit Management

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-31359 (CSI-4575) LIMO, REL Limit Management

## 📝 Notes

Proposal is sending Contract Service notification also in moment of the Contract sign when all related Contract Services are turned on to SWITCH_ON operation status. 

As this notification will be primarily intended for LIMO module, and AM is not prepared to process this notification yet, the message (header) should be extended with a flag so that AM excludes such a message from processing. It also means, BSL Contract Service doesn't get any confirmation from AM within this operation so the current "automation" stay unchanged - see affected UC08.291 Switch service on automatically.

The Contract Services creation stays as is.

Calculation of the Contract Service Parameters stay as is.


New header attributes in Contract Service Notification v5
Two new optional attributes must be added to the notification header: 

	
- serviceType


	
- isInitialNotification


UC 08.291 Enhancement
A new steps will be added to UC 08.291:

After a Contract Service is automatically switched to SWITCH_ON during contract signing:

	
- CSI generates a new system event:
ContractServiceCreatedSE
	
- This event triggers the generation of:
Contract Service Notification v5
	
- The v5 notification must include two new header attributes:
- header.serviceType =  Service Type.Service Code of Service related to the Contract
- header.isInitialNotification = true

## 📊 Appears In (1 diagrams)

- Custom: CBL-31359 (CSI-4575) LIMO, REL Limit Management
