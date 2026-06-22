---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation"
domain: "Data manipulation support"
element_id: 1584678
diagrams: 1
connections: 3
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Set Paid-off contract to Active status

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract status manipulation

## 📝 Notes

This use case describes needed data manipulations to change contract status from Paid-off (L) to Active (A) provided that the contract previous status is Active, and moreover the contract installment schedule has to contain an active TERMINATED installment. Available only for close end loans.
Important notice: Before the action is run, it is needed to check if no payment is paired with the terminated installment.

Overview of steps:

	
- Unpair a payment possibly paired with the terminated installment (this action has to be performed via the application GUI)
	
- Create a new version of standard installments which were paid-off by copy of their last inactive version.
	
- Deactivate the Terminated installment
	
- Deactivate accrued income on the contract
	
- Change the contract status to Active.
	
- Pair the payment to the contract installment schedule (this action has to be performed via the application GUI)
	
- Notice the LOXON team that the contract status is changed back to Active?

## 🔗 Connections (3)

- → UseCase «include»: [[Change contract status]]
- → Dependency: [[OBS message mapping rules]]
- → Dependency: [[Creation INSTALMENT120 record rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract status manipulation
