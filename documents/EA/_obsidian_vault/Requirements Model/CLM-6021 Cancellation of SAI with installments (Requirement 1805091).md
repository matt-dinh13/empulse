---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805091
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-6021 Cancellation of SAI with installments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

Now, there is not possible to cancel SAI contract with installments.
Goal of the task is allow SAI cancellation if AllowSAIInstallmentsCancellation (a flag) is set to TRUE.
The flag will be only set to TRUE for VN, otherwise will be FALSE.

Expected usage of Contract cancellation for SAI when customer asks for SAI contract cancellation after SAI contract signature

	
- Customer asks for SAI contract cancellation within 14 days period. Unlike COP service usage, the system doesn't check length of the mentioned period and the contract can be cancelled every time outside this period.


	
- Operator finds affected contract and run Cancel contract action on the Contract detail screen
	
- SAI contract is cancelled, PPI (insurance) is cancelled as well.


Prerequisites:

	
- AllowSAIInstallmentsCancellation (system property) is set to TRUE

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
