---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833409
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Get number of deffered period prolonged by PAYHOL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

{ADD CBL 9520 (IS-846)}
This rule describes getting of Deffered Period Number attribute for PAYHOL service

Input:

	
- Contract



Output:

	
- Defered period number


Steps:

	
- Sytem gets Contract Service Param.Date Value for Param Type END_OF_GRACE_PERIOD (Contract Service Param having Contract Service -> Contract Service Param)
	
- System gets All Loan Service Requests (i.e. Loann Sevice Request having Contract Service -> Service -> Payhol Service) where Service.Service Type Code = PAYHOL and Loan Service Request.Current Status = EXECUTED and Payhol Service.Bonus Services Impact = POSTPONE and Payment Holiday Request.First Deferred Due Date <= End of Grace period and  Contract = processed Contract
	
- If no Loan Service Request found, set Defered period number = 0

Else system gets Payment Holiday Request.Deferred Period Number for all Loan Service Requests found in step 1 (Payment Holiday Request having Loan Service Request)

{/ADD CBL 9520 (IS-846)}

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
