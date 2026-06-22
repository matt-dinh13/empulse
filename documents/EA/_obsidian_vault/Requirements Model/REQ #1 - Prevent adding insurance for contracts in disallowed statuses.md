---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5433 (CLM-1961) Stop charging premium insurance for Paid-off/Written-off REL contracts"
domain: "Requirements Model"
element_id: 1433518
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Prevent adding insurance for contracts in disallowed statuses

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5433 (CLM-1961) Stop charging premium insurance for Paid-off/Written-off REL contracts

## 📝 Notes

Goal of this task is to:

	
- block adding/switch on the REL insurance on Paidoff/Written off contracts
	
- send "insurance switch off" to the AM system when contract is Paidoff/Written off and insurance is running


A list of affected use cases:

	
- 08.340 Show Insurance offers for loan contract (adding insurance on running contract)
	
- 08.342 Get contract insurance offers service (adding insurance on running contract - REST WS)
	
- 08.347 Add Insurance service on Contract service (adding insurance on running contract - REST WS)
	
- 01.770 Process account transaction notification (REL insurance initialization)


A list of use cases having the contract status limitation implemented but the rule modification will be done here:

	
- 08.072 Change insurance operation status (N, A)

## 📊 Appears In (1 diagrams)

- Custom: CBL-5433 (CLM-1961) Stop charging premium insurance for Paid-off/Written-off REL contracts
