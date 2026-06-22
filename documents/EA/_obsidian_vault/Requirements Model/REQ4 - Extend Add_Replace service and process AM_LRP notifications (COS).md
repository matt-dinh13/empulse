---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders"
domain: "Requirements Model"
element_id: 1850987
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ4 - Extend Add/Replace service and process AM/LRP notifications (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders

## 📝 Notes

COS will be updated to support new way of Add/Replace service and to process notification from AM and LRP.

DB - new table for LoanServiceRequest (LSR) result will be created:

	
- LSR_PROCESSING_RESULT related 1:N to LSR
	
- Fields: System, Status, CreationDate, UpdateDate, ResultMsg


Add/Replace service request processing:
 

	
- COS identifies that new process should be used (by new attribute in the API, e.g. useLrp) and if so then following is used:
	
- creates LSR record with REQUEST_ORIGINATION = COS
	
- creates 2 records in LSR_PROCESSING_RESULT in status WAITING_FOR_CONFIRMATION (one with system=AM, 2nd with system=LRP)
	
- get Activation date from AM (new API) and use it as ContractService.StartDate
	
- process Add or Replace operation as in current implementation
	
- send notification to AM/LRP (use ContractService.StartDate as effective date in notification )


Processing of AM/LRP notification AM: processServiceOperationNotification, LRP: newly implemented notification
 

	
- find LSR by notification.RequestID, check that REQUEST_ORIGINATION =COS, else skip processing
	
- find related LSR_PROCESSING_RESULT with system = system from notification (AM/LRP) and update status and resultMsg according to notification result (CONFIRMED, ERROR)
	
- checked all LSR_PROCESSING_RESULT.Status related to LSR, if there is no WAITING_FOR_CONFIRMATION then process final result and send notification:
- if all LSR_PROCESSING_RESULT.Status = CONFIRMED then process activation and generate ActivateSE (the case when contract service is already active and no notification is generated must be solved in some way)
- if any ERROR, then process Rollback and generate RolbackSE

## 📊 Appears In (1 diagrams)

- Custom: CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders
