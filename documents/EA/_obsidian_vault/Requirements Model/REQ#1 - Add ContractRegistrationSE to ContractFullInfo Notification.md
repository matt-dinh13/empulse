---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4009 (CLM-1528) Add ContractRegistrationSE to ContractFullInfo Notification"
domain: "Requirements Model"
element_id: 1301437
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 -  Add ContractRegistrationSE to ContractFullInfo Notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4009 (CLM-1528) Add ContractRegistrationSE to ContractFullInfo Notification

## 📝 Notes

Extension of ContractRegistrationSE event type to generate ContractFullInfo notification with ContractSystemEventType = ContractRegistrationSE.

New version of ContractFullInfo with new ContractSystemEventType is needed. 
OSB will automatically downgrade new version to previous one if needed. In this case new ContractRegistrationSE will be ignored.
ID has to use new version of ContractFullInfo to receive this new event.

Other countries can define ContractSystemEventType filter on OSB side to block unused events.

## 📊 Appears In (1 diagrams)

- Custom: CBL-4009 (CLM-1528) Add ContractRegistrationSE to ContractFullInfo Notification
