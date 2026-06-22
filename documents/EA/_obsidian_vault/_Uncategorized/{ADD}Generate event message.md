---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878445
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Generate event message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Input:

	
- type of event



	
- System creates new JSON message in following structure:
sourceChannel = constant "LOR"
businessEvent = from input
partyID = Client.CUID (if exists)
applicationID = TA.ID (if exists)
contractCode = Contract.Code (if exists)
timestamp = actual systime
	
- System sends the message to Kafka stream streaming.logs.timeto.events.
