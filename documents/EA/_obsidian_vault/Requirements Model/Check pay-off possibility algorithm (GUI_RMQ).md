---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL"
domain: "Requirements Model"
element_id: 1835147
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Check pay-off possibility algorithm (GUI/RMQ)

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL

## 📝 Notes

System checks conditions below. If any check fails, then no more checks are done for this contract and the failure ResultCode is displayed on GUI as an error message (where applicable) or logged into StatusLog. Below steps show them in format ResultCode = <GUI message code> / <RMQ>
 

	
- System checks that contract (CONTRACT.CODE) exists. In case of failure ResultCode = CONTRACT_NOT_FOUND.
	
- System checks that contract is not already paid-off (CONTRACT.STATUS <> "Paid off"). In case of failure ResultCode = MSG_0209 / CONTRACT_ALREADY_PAID_OFF.
	
- If Contract.Contract Type = SAI, then ResultCode = CONTRACT_WRONG_TYPE.
	
- System checks that contract is in status Active or Signed (CONTRACT.STATUS = "Active" or "Signed"). In case of failure ResultCode = MSG_0210 / CONTRACT_WRONG_STATUS.
	
- System checks that contract has no another unfinished request for pay-off by Check for unprocessed Pay-off request existence  rule. If 'TRUE' is returned, system sets ResultCode = MSG_0171 / CONTRACT_PENDING_STATUS_TRANSITION_REQUEST.
	
- If Contract.Contract Type = CEL and contract is in status cancel then ResultCode = CONTRACT_ALREADY_CANCELLED
	
- If Contract.Contract Type = CEL then system checks if there are any active installments. In case of failure ResultCode = MSG_ACCOUNT_NO_ACTIVE_INSTALLMENTS / ACCOUNT_NO_ACTIVE_INSTALLMENTS.
	
- If Contract.Contract Type = CEL and pay-off is required because of death of client (PayoffReason = "DEATH"), then system checks that there aren't any fees or penalties after date of death - i.e. pay-off date in this case (no INSTALLMENT[.INSTALLMENT_DUE_DATE > pay-off date].INSTALLMENT_PART.PART_TYPE = "F - Fee" or "P - Penalty" and .INSTALLMENT_TYPE = "EXTRAORDINARY" exists). In case of failure ResultCode = MSG_ACCOUNT_FEES_AFTER_PAYOFF_DATE / ACCOUNT_FEES_AFTER_PAYOFF_DATE.
	
- If pay-off is required because of death of client (PayoffReason = "DEATH"), then system checks that date of death - i.e. pay-off date in this case - is not in the future (pay-off date <= today). In case of failure ResultCode = MSG_ACCOUNT_PAYOFF_DATE_IN_FUTURE / ACCOUNT_PAYOFF_DATE_IN_FUTURE.

## 🔗 Connections (4)

- ← Dependency: [[Termination due date]]
- → Dependency: [[01.410 Pay-off contract manually (UseCase 1878655)]]
- → Dependency: [[Check for unprocessed Pay-off request existence]]
- ← Dependency: [[01.501 Pay-off CEL contract from external system]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL
- Custom: CBL-25279 (CSI-3642) Automated Tagging for Standalone Insurance contracts into Cancelled Status
- Use Case: Pay-off contract manually
- Use Case: Pay-off contracts from external system
