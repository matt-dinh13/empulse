---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6141 (CLM-2022) Register and finish fully paid signed contracts on due date"
domain: "Requirements Model"
element_id: 1414820
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Register and Finish fully paid signed contracts on due date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6141 (CLM-2022) Register and finish fully paid signed contracts on due date

## 📝 Notes

The goal is to create a new job to find all fully paid and not registered contracts in status SIGNED with Condition accepted and last installment due date<=sysdate and do following actions at the same day:
 

	
- block outgoing payments
	
- do registration and activate contract by use case 01.273 Register contract common , use new special business event "Automatically registered"
	
- finish contract by use case 01.715 Finish contract automatically


Country specific - for KZ only.

Job will be activated for KZ only.
System property BlockOutgoingPaymentBeforeAutoRegistration is set for KZ only.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6141 (CLM-2022) Register and finish fully paid signed contracts on due date
