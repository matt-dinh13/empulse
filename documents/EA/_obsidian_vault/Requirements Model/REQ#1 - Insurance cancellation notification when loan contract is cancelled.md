---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7747 (CLM-2734) Enhancement JMS ContractInsuranceService"
domain: "Requirements Model"
element_id: 1503151
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Insurance cancellation notification when loan contract is cancelled

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7747 (CLM-2734) Enhancement JMS ContractInsuranceService

## 📝 Notes

Goal of this requirement is to generate ContractInsuranceServiceCancelledNotification message for following use cases:

	
- Contract is cancelled in BSL and the insurance is cancelled automatically as well (Status Reason = CB, Status Reason Text = Cancelled with base contract) - see the UC 01.360 Cancel contract
	
- To change the reason code to MANUALLY_CANCELLED for insurance cancellation which is done manually in BSL / via API - see the UC 08.111 Cancel contract insurance common

## 📊 Appears In (1 diagrams)

- Custom: CBL-7747 (CLM-2734) Enhancement JMS ContractInsuranceService
