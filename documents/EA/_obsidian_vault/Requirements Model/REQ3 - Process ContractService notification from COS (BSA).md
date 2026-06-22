---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders"
domain: "Requirements Model"
element_id: 1850988
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ3 - Process ContractService notification from COS (BSA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders

## 📝 Notes

Newly implemented Add service and Replace service in COS is async and result is provided by COS notification.

BSA will be extended to receive COS notification for ContractServiceActivated and ContractServiceReplacedRollback.

COS notification processing:
 

	
- BSA finds all Contract Result related to ContractServiceID from notification (usually just one will be found but we have to support also multiple operation for the same contractservice):
- BulkOperation with ExecutionSystem=COS
- and status=EXECUTION_IN PROGRESS or EXECUTION_PAUSED
- and related Contract Result.ContractServiceID from notification
- and Contract Result.ExecutionStatus = WAITING_FOR_CONFIRMATION
	
- BSA update Contract Result.ExecutionStatus according to notification result to COMPLETED or ERROR and store error reason (if provided)
	
- BSA check each found BulkOperation for any Contract Result.ExecutionStatus = WAITING_FOR_CONFIRMATION
- if there is no record with WAITING_FOR_CONFIRMATION status, BSA updates BulkOperation status to EXECUTED (notification for all items received)

## 📊 Appears In (1 diagrams)

- Custom: CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders
