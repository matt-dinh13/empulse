---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case"
domain: "Analysis Model"
element_id: 1544234
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Check Moratorium for Grace period

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case

## 📝 Notes

Description:
Evaluates whether the moratorium for Grace period has already expired.

Input parameters:
- service of type GRPER assigned to contract
- advance - set TRUE for evaluation of Grace Period status a month before end of moratorium else set FALSE

Output parameters:
- result (Grace period is under moratorium = FALSE)

Procedure:

	
- LengthOfMoratorium =  ContractService.Service.GracePeriodService.Moratorium (number of installments)
	
- If LengthOfMoratorium = 0 then return TRUE.
	
- If advance = TRUE then 
3.1 If the LengthOfMoratorium = 1 then return TRUE.
3.2 Else calculate MoratoriumDate as due date of the (LengthOfMoratorium - 1)-th installment of type 'STANDARD' in contract installment schedule plus one more day (i.e. next day after found due date).  
	
- If advance = FALSE then Calculate MoratoriumDate as due date of the LengthOfMoratorium-th installment of type 'STANDARD' in contract installment schedule. 
If MoratoriumDate is not found then return FALSE.
	
- If current date >= MoratoriumDate 
- then return TRUE
- else return FALSE

## 🔗 Connections (2)

- ← Dependency: [[Grace period conditions]]
- ← Dependency: [[08.204 Evaluate status of Grace period (UseCase 1869022)]]

## 📊 Appears In (2 diagrams)

- Use Case: Grace period processing
- Use Case: Status of Grace Period
