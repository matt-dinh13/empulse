---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1851709
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Insurance Premium Fully Paid

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD IS-2399}
PH only
This rule is checking if the insurance premium fee is fully paid by comparing sum of the fee amount on the fist IS version with sum of the paid fee amount on the latest IS version (condition for insurance termination).

Input:
- contract code
- contract insurance service

Output:
- TRUE/FALSE

Steps:

	
- System finds Tariff item ID for defined insurance service fee ( contractInsuranceService -> contractService -> tariff -> tariffItem)
	
- If tariff item is calculated in pricipal (tariff item has flag TO_PRINCIPAL):
- Sum of insurance premium is calculated as sum of principal installemnt part (installmentPart.amount) at the first version of installment schedule (contract -> installments -> installmentParts where  installment.installmentVersion = 1 and installmentPart.partType = S
- Sum of paid insurance premium  is calculated as sum of paid principal amount (installmentPart.paidAmount) at the latest installment schedule version (contract -> installments -> installmentParts where  installment.activeFlag = 1 and installmentPart.partType = S)
Else:
- Sum of insurance premium  is calculated as sum of fee amount (installmentPart.amount) for specified tariff item at the first version of installment schedule (contract -> installments -> installmentParts where  installment.installmentVersion = 1 and installmentPart.partType = F and installmentPart.tariffItemID =Ttariff item ID (from previous step))
- Sum of paid insurance premium  is calculated as sum of paid fee amount (installmentPart.paidAmount) for specified tariff item at the latest installment schedule version (contract -> installments -> installmentParts where  installment.activeFlag = 1 and installmentPart.partType = F and installmentPart.tariffItemID =Ttariff item ID (from previous step))
	
- If Sum of insurance premium  > Sum of paid insurance premium, then set Fully paid = FALSE
Else if Sum of insurance premium fee =< Sum of paid insurance premium fee, then set Fully paid = TRUE
	
- Return Fully paid as result.
