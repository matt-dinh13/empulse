---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805094
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Early repayment of SAI contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

This case describes requirement when the customer asks for early finishing the SAI contract by paying entire remaining debt where the insurance PPI policy continues to the planned end.
There should be available two approaches for performing the action:

	
- If the FER service related to the SAI contract is set for automatic evaluation, after customer sends enough amount to cover remaining debt, the system process the FER, regenerates the installment schedule and SAI contract is finished. PPI policy (insurance) related to SAI stays unchanged.
	
- The customer can ask for early repayment via back office (Mobile app?) - in this case, operator creates the FER request and prompt the customer to pay agreed amount. The system waits for the amount is received into system. If the agreed amount is received, the system executes the FER request - i.e. installment schedule is regenerated and SAI contract is finished. PPI policy (insurance) related to SAI stays unchanged.


Prerequisites:

	
- the SAI contract has FER service assigned
	
- to make the FER unusable within cooling-off period, respective setting need to be performed on the FER service (e.g. moratorium)

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
