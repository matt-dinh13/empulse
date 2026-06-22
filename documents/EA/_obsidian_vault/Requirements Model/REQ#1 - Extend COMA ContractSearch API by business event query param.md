---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param"
domain: "Requirements Model"
element_id: 1874163
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extend COMA ContractSearch API by business event query param

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param

## 📝 Notes

Extension of  COMA REST contract search method 

New query params:

	
- businessEventType - Business Event Type related to the Contract
	
- businessEventPerformedBy - user who triggered the event. Employee number will be used for filtering the Business Event Types


New search by businessEvent is limited to a maximum of 3 months into the past. The limitation value is parameterized.
If businessEvent is not used, the search behaviour stays as is.

## 📊 Appears In (1 diagrams)

- Custom: CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param
