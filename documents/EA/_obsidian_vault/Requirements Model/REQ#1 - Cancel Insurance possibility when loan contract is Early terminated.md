---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated"
domain: "Requirements Model"
element_id: 1608380
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Cancel Insurance possibility when loan contract is Early terminated

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated

## 📝 Notes

There is a new CET service parameter "Insurance cancellation period (days)" which defines period from contract sign to the CET decisive day.
If the parameter is set and CET decisive day is in the defined period, then:

	
- CET amount is calculated and stored as amount without all insurance amount (CancelInsurance input paranmeter is set for {MOD}03.070 Calculate early repayment amount  and OriginalInsuranceAmountInPrincipal  is shown on GUI only)
	
- the new CancelInsurance flag is set in the LoanServiceRequest (ER request)
	
- insurances are cancelled as part of CET processing in this case

## 📊 Appears In (1 diagrams)

- Custom: CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated
