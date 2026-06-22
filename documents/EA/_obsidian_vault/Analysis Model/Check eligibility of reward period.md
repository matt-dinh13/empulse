---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model"
domain: "Analysis Model"
element_id: 1852423
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check eligibility of reward period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Use Case Model

## 📝 Notes

{ADD IS-2321} 
PH only

Input:
- Contract code
- Period start date
- Period end date

Output:
- TRUE/FALSE
 

	
- System gets DPD tolerance parameters for Reward service for given contract (Contract -> Contract Service -> Service[Type = CELREW] -> Payment Discipline Param) - if paymentDisciplineParam.DpdScope = I than continue by next step, else use case ends.
	
- System sets InstallmentDueDateStart = Period start date, InstallmentDueDateEnd = Period end date
	
- System gets Installments and installment parts having Installment.Due Date between InstallmentDueDateStart and InstallmentDueDateEnd and (Installment [Part.Part Type = S].Amount + Installment Part[Part Type = I].Amount) > 0) and Installment.Type = STANDARD and Installment.ActiveFlag = 1
	
- System checks if all installments from previous step were paid under DPD tolerance:
- if installment is fully paid, than installment.fullyPaidWithoutTolerance <= installment.dueDte + paymentDisciplineParam.DpdDelayTolerance, than return TRUE
- else if installment is not fully paid, than sum of installment parts amount (installment -> installmentPart.amount) <= sum of paid installment parts amount (installment -> installmentPart.paid amount) + paymentDisciplineParam.DpdAmountTolerance, than return TRUE
- Else return FALSE

## 🔗 Connections (1)

- ← Dependency: [[08.606 Process automatic CEL Reward]]

## 📊 Appears In (1 diagrams)

- Use Case: CEL Rewards 
