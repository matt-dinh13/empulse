---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584683
diagrams: 1
connections: 3
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Canceled contract to Active status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes needed data manipulations to change contract status from Canceled to Active provided that the contract previous status is Active. Available only for close end loans.
Overview of steps:

	
- Set contract status and contract status transition to ACTIVE
	
- Reactivate an insurance service and insurance contract if exist


	
- If cancelled outgoing payments exist for the contract, create the new one by copy of the original canceled payments


	
- Reactivates the debt catalogue for the contract

## 🔗 Connections (3)

- → Dependency: [[OBS message mapping rules]]
- → UseCase «include»: [[Change contract status]]
- → Dependency: [[Creation INSTALMENT120 record rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
