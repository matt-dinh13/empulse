---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584671
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Written-off contract to Cancel status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes needed data manipulations to change contract status from Write-off (H) to Cancel (T). Available only for close end loans.
Overview of steps:

	
- Set contract status to CANCEL
	
- Cancel all active contract services (including the insurance service types if exist)
	
- Cancel the last version of the contract Installment Schedule


	
- Cancel paid and unpaid outgoing payments of selected the contract


	
- Reset the debt catalogue of selected the contract 


Notice: If a bank system is presented, no communication message is set for the contract status change; OBS does not reckon with that, so needed operations have to be done manually here.

## 🔗 Connections (1)

- → UseCase «include»: [[Change contract status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
