---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18150 (CLM-5001) contract APIs event with status trans history and business events"
domain: "Modules"
element_id: 1799733
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 CBL-18150 (CLM-5001) contract APIs event with status trans history and business events

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18150 (CLM-5001) contract APIs event with status trans history and business events

## 📝 Notes

{ADD CLM-5001/}

This is to extend contract API and Kafka with data from:
 

	
- contract status transition history
	
- business events
	
- refinanced contracts (already in Kafka)
	
- extended properties



Steps:

	
- Add 5 new COMA endpoints
	
- Add new access rights for them
	
- limit results to last 20 of one type of event on v11/12 endpoints and Kafka


	
- Add 3 new lists to Kafka avro schema:
- businessEvents
- statusTransitions
- extendedProperties


	
- Expand 2 contract endpoints with new projections
	
- LDM's for all new items in Common package

## 📊 Appears In (1 diagrams)

- Custom: CBL-18150 (CLM-5001) contract APIs event with status trans history and business events
