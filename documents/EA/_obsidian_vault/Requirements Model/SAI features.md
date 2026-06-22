---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1805092
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 SAI features

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

- On SAI contract sign, the Condition Accepted are set. It is needed to set EnableSAIWithInstallments (feature flag) = TRUE (Sign contract finalization)


	
- Payoff SAI contract type via XML file is not supported (UC01.500)
	
- Payoff SAI contracts on LCS request is not supported (Check pay-off possibility algorithm (GUI/RMQ)) (UC01.501, UC01.410)
	
- Cancel signed SAI contracts with installments via UI and API is not supported (UC01.330, UC01.332)
	
- Cancel active SAI contracts with installments via UI and API is not supported (UC01.590, UC01.333)
	
- Cancel undisbursed SAI contract is possible with global parameter CancelUndisbursedDelay_SAI >=0 (UC01.445)
	
- Insurance cancellation on SAI contract is only allowed when the SAI contract is finished.
	
- Insurance termination on SAI contract is only allowed when the SAI contract is finished.
	
- Cooling Off Period (COP) on request applied for SAI contract wont probably work as system calculates COP amount for repayment based on premium amount in principal. This amount probably needs to be covered by some compensation payment.
Within COP processing, the Insurance is cancelled.
After successful COP execution, the SAI contract is finished. (UC08.252 Process cooling-off period)
	
- Condition accepted for both SAI with/without installments is set on COP (Cooling-off Period Service) execution (UC01.711, UC01.252, triggered by UC08.252) - it needs to be fixed, so that only SAI without installments is affected.
	
- SAI contract can be finished manually, if no debt is recorded on installments (UC01.730)
	
- SAI contract can be finished automatically, if no debt is recorded on installments (UC01.715)
	
- Small underpayment is not allowed for SAI contract in case of the contract finishing (whole debt need to be paid)

## 📊 Appears In (1 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
