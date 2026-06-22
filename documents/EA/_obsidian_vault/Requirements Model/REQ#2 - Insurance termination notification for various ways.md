---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7747 (CLM-2734) Enhancement JMS ContractInsuranceService"
domain: "Requirements Model"
element_id: 1503150
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Insurance termination notification for various ways

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7747 (CLM-2734) Enhancement JMS ContractInsuranceService

## 📝 Notes

Goal of this requirement is to generate ContractInsuranceServiceTerminatedNotification for following use cases:

	
- Insurance is terminated automatically when the insurance period has ended (Status Reason = TIE, Status Reason Text = Last additional protection period has been finished) - see the UC 11.130 Terminate finished insurance contracts
	
- Insurance is terminated automatically due to paid-off contract and the insurance period has ended (Status Reason = TPO, Status Reason Text = Additional protection terminated due to contract is paid-off and last additional protection period has been finished) - see the UC 11.130 Terminate finished insurance contracts
	
- Insurance is terminated automatically due to FER (Status Reason = TFR, Status Reason Text = Terminated on full repayment), or other reason when the contract is early paid - see the UCs 01.715 Finish contract automatically and 01.730 Finish contract manually

## 📊 Appears In (1 diagrams)

- Custom: CBL-7747 (CLM-2734) Enhancement JMS ContractInsuranceService
