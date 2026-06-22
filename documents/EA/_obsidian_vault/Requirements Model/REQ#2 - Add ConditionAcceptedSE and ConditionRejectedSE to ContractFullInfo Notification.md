---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification"
domain: "Requirements Model"
element_id: 1394436
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 -  Add ConditionAcceptedSE and ConditionRejectedSE  to ContractFullInfo Notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification

## 📝 Notes

Extension of ConditionAcceptedSE and ConditionRejectedSE event type to generate ContractFullInfo notification with ContractSystemEventType = ConditionAcceptedSE or ConditionRejectedSE .

New version of ContractFullInfo with new ContractSystemEventType is needed. 
OSB will automatically downgrade new version to previous one if needed. In this case new ConditionAcceptedSE or ConditionRejectedSE will be ignored.
LCS has to use new version of ContractFullInfo to receive this new events.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
