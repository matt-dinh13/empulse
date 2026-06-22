---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1879426
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Update Offer Installment rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This rule describes way of Offer Financial parameter update by the installment plan data returned by Cabus-AM in moment of credit documentation preparation. Offer Financial parameter, Offer Installment and Offer Installment Part are updated and generated based on CalculateInstallmentPlanResponse structure.


Inputs:

	
- Original OFP (original offer before recalculation with flag chosen=TRUE)


	
- Data from CalculateInstallmentPlanResponse


Output:
updated OFP with related structure for Installment schedule

Steps:

	
- System updates

- Offer financial parameters

	
- Account Transaction Code = offerCode
	
- Initial Transaction Interest Rate = efectiveInterestRate



	
- System cancels (and archives) previous versions of the active OFP.InstallmentSchedule, if exists.
	
- System generates installment schedule according to CalculateInstallmentPlanResponse with parameters

- Offer Installment

	
- Installment Number = installmentNumber
	
- Due Date =  dueDate


	
- Due Date Customer = prescribeDate


	
- Archived = FALSE
	
- Installment Type = STANDARD
	
- Recalculation Reason = 'GN'(Generate new)


- Offer Installment Part (values are taken from InstallmentPlanFinancialParametersDto) for each installment
If Installment.principalAmount <> 0 then create record in Offer Installment Part with
- Amount = Installment.principalAmount
- PartType = Principal(S)
If Installment.interestAmount <> 0 then create record in Offer Installment Part with
- Amount = Installment.interestAmount 
- PartType = Interest(I)
If Installment.feeAmount <> 0 then create record in Offer Installment Part with
- Amount = Installment.feeAmount 
- PartType = Fee(F)
