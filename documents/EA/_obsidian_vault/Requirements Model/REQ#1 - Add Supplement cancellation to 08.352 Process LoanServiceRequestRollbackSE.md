---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-902) Rollback loan service request update"
domain: "Requirements Model"
element_id: 1619351
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Add Supplement cancellation to 08.352 Process LoanServiceRequestRollbackSE

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-902) Rollback loan service request update

## 📝 Notes

IS team implemented independent functionality for rollback of the LSR from Installment schedule.

In this case the whole process is initiated on IS side and LoanServiceRequestRollbackSE is generated after LSR cancellation.
Therefore the part of Supplement cancellation has to be added also to {MOD}08.352 Process LoanServiceRequestRollbackSE event  
(supplement is canceled without no reason here if it is not done before within 08.351 Rollback loan service request )

Also a new business event types added:

	
- GIFTP_ROLLBACK
	
- GRPER_ROLLBACK

## 📊 Appears In (1 diagrams)

- Custom: CBL-10733 (CSI-902) Rollback loan service request update
