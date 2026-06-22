---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850033
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Check Contract status for Contract Service cancellation and termination (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model

## 📝 Notes

{ADD CSI-2974 /}
This rule describes checking of possible contract status for contract service cancellation and termination allowing.

Input:

	
- Contract
	
- IsInsuranceService (bool)


Output:

	
- Result (TRUE / FALSE)


Steps:

	
- Get current contract status
	
- If Status = A (Active) or N (Signed) then Result = true, else
	
- If Status = L (Paid Off) then Result is set by parameter DenyContractServiceCancelInPaidOff, else
	
- If Status = H (Written Off) then Result is set by parameter DenyContractServiceCancelInWrittenOff, else
	
- If Status = K (Finished) and IsInsuranceService = TRUE then Result is set by parameter DenyContractServiceCancelInFinished, else
	
- Result = false (for all other statuses)


Note: 
if parameter DenyContractServiceCancelIn... = 1 then Result = FALSE else TRUE

## 🔗 Connections (3)

- ← Dependency: [[{MOD}08.060 Replace Loan Service method (COS)]]
- ← Dependency: [[08.040 Terminate Loan Service (COS) (UseCase 1872527)]]
- ← Dependency: [[08.050 Cancel Loan Service method (COS) (UseCase 1872512)]]

## 📊 Appears In (3 diagrams)

- Use Case: Cancel Loan Service - Use Case Model
- Use Case: Replace Loan Service - Use Case Model
- Use Case: Terminate Service on Contract - Use Case Model
