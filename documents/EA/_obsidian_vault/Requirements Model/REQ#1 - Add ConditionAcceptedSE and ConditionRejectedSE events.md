---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification"
domain: "Requirements Model"
element_id: 1394435
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 -  Add ConditionAcceptedSE and ConditionRejectedSE events

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification

## 📝 Notes

Creation of new events ConditionAcceptedSE, ConditionRejectedSE  which are generated when Contract.ConditionsAccepted is set to ACCEPTED or REJECTED.

It is set by rules Set contract Condition Accepted  and Set Contract Condition Rejected  which should be called from following UCs:
Sign contract finalization (rule)
01.252 Evaluate Contract Service Parameters
01.712 Finish contract on service execution
08.925 Cancel expired loan service requests
05.350 Process disbursement confirmation message
05.310 Process disbursement confirmations

@DEV - check all these UCs and implement calling of these shared rules (methods) if it is not implemented currently.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
