---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders"
domain: "Requirements Model"
element_id: 1850986
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ1 - Implement LoanServiceRequest reason (BSL + COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders

## 📝 Notes

New way of Add/Replace service processing including processing of notification from AM and LRP will be implemented in COS.
LoanServiceRequest (LSR) record is used to identify Add/Replace service request and it will be used also to separate new processing in COS and current processing in BSL.

BSL:

	
- current field REQUEST_ORIGINATION will be extended by new value COS (DB check + possible enum for notifications)
	
- processing of processServiceOperationNotification from AM will be extended to check LSR.REQUEST_ORIGINATION, if value = COS then all processing will be skipped in BSL (will be processed in COS only)


COS:

	
- processing of processServiceOperationNotification from AM will be switched on but will be processed only if LSR.REQUEST_ORIGINATION = COS (same also for new notification from LRP)

## 📊 Appears In (1 diagrams)

- Custom: CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders
