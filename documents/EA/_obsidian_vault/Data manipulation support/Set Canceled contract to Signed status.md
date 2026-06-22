---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584673
diagrams: 1
connections: 3
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Canceled contract to Signed status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes needed data manipulations to change contract status from Canceled to Signed provided that the contract previous status is Signed.  Available only for close end loans.
Overview of steps:

	
- Set contract status and contract status transition to SIGNED
	
- Reactivate all cancelled contract services including the insurance service types if exist
	
- Reactivate the last version of the contract Installment Schedule


	
- If cancelled outgoing payments exist for the contract, create the new one by copy of the original canceled payments


	
- Reactivates the debt catalogue for the contract 
	
- If a bank system is presented, some communication messages are set for the respective contract status change

## 🔗 Connections (3)

- → Dependency: [[Creation INSTALMENT120 record rules]]
- → Dependency: [[OBS message mapping rules]]
- → UseCase «include»: [[Change contract status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
