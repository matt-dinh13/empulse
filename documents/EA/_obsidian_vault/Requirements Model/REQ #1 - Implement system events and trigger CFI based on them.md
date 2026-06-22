---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9102 (CLM-2824) SMS/PUSH notification when CET/FER requested via Terminals"
domain: "Requirements Model"
element_id: 1526342
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Implement system events and trigger CFI based on them

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9102 (CLM-2824) SMS/PUSH notification when CET/FER requested via Terminals

## 📝 Notes

Goal of this requirement is following:

	
- Generete system event ContractFinishingAutomaticallyOnLoanServiceRequestSE, when service loan request is executed.
	
- Generate JMS ContractTerminatedRequest based on this system event for external CET or FER.


This feature is controlled by CLM Feature Flag sentNotificationForTerminatedContractViaExternalCETAndFER.

## 📊 Appears In (1 diagrams)

- Custom: CBL-9102 (CLM-2824) SMS/PUSH notification when CET/FER requested via Terminals
