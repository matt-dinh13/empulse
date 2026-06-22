---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833424
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Check contract status for contract service cancellation and termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

{ADD CSI-2911 /}
This rule describes checking of possible contract status for contract service cancellation and termination

Input:

	
- Contract
	
- Is Insurance service (bool)
	
- Action (cancel / terminate) (not used at the moment as the check it the same for both actions)


Output:

	
- Result (TRUE / FALSE)


Steps:

	
- Get current contract status
	
- If Status = A (Active) or N (Signed) then Result = true, else
	
- If Status = L (Paid Off) then Result is set by parameter DenyContractServiceCancelInPaidOff, else
	
- If Status = H (Written Off) then Result is set by parameter DenyContractServiceCancelInWrittenOff, else
	
- If Status = K (Finished) and Is Insurance service = TRUE then Result is set by parameter DenyContractServiceCancelInFinished, else
	
- Result = false (for all other statuses)


Note: 
if parameter DenyContractServiceCancelIn... = 1 then Result = FALSE else TRUE

## 🔗 Connections (4)

- ← Dependency: [[Check conditions to contract service cancellation]]
- ← Dependency: [[{MOD}Check conditions to contract service termination]]
- ← Dependency: [[{MOD}Check conditions to insurance cancellation]]
- ← Dependency: [[{MOD}Check conditions to insurance termination]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Use Case: Contract insurance cancellation
- Use Case: Contract insurance termination
