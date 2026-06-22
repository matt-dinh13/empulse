---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584676
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Paid-off contract to Cancel status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This script is replaced by UC 01.592 Cancel paid-off contract manually (function available from GUI)
{DEL DRR-380 /}
This use case describes needed data manipulations to change contract status from Paid-off (L) to Cancel (T). Available only for close end loans.
Overview of steps:

	
- Set contract status to CANCEL
	
- Cancel all active contract services (including the insurance service types if exist)
	
- Cancel the last version of the contract Installment Schedule


	
- Cancel paid and unpaid outgoing payments of selected the contract


	
- Reset the debt catalogue of selected the contract

## 🔗 Connections (1)

- → UseCase «include»: [[Change contract status]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
