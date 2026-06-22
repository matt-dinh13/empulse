---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-395 (CLM-324) WS to JMS (async communication)"
domain: "Requirements Model"
element_id: 1344778
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - New integration for the contract pay-off requests

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-395 (CLM-324) WS to JMS (async communication)

## 📝 Notes

Goal of this task is replacement of the current ContractStatusWS.closeInstallment (i.e. sending requests for contract pay-off from LCS into the BSL) and TerminationStatusService.terminationStatus (response on the request for contract pay-off sent by BSL back to LCS) by a messaging functionality.
The new integration for the contract pay-off requests will be proposed as follow:

	
- LCS generates a request notification for the contract pay-off (See Consumed notification messages chapter)
	
- the request notification is received and processed by BSL CLM
	
- BSL CLM generates response notification about the result of pay-off request processing. (See Generated notification messages chapter)

## 📊 Appears In (1 diagrams)

- Custom: CBL-395 (CLM-324) WS to JMS (async communication)
