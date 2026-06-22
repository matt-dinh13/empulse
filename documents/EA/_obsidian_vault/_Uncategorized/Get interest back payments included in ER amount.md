---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1874495
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get interest back payments included in ER amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD DFPH-302}
Input parameters:
- contract code

Output parameters:
- IncludedInterestBackAmount

Steps:

	
- System find created loan service request for Interest back service (contract -> loanServiceRequest where loanServiceRequest.currentStatus = CREATED and loanServiceRequest.requestType = IBACK). If no request found, set IncludedInterestBackAmount = 0. Else continue with next step.
	
- System get number of moratorium installments for FER (contract -> contractService -> loanOptionService.moratorium)
	
- If number of moratorium installments > 0, system check interest back periods related to moratorium installments:
3.a) System find not evaluated interest back periods with related instalment number from 1 to number of moratorium installments (contract -> loanServiceRequest ->  interestBackPeriod.status = WAITING_FOR_EVALUATION). If no period is found, set IncludedInterestBackAmount = 0.
3.b) System calculate IncludedInterestBackAmount = sum of  interestBackPeriod.interestBackAmount of periods found in previous step.
Else set IncludedInterestBackAmount = 0.
	
- Retuns IncludedInterestBackAmount.
