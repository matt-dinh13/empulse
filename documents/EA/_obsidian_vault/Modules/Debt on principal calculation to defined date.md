---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623483
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Debt on principal calculation to defined date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This algorithm describes calculation of the total debt on principal part of installments registered to the defined date

Input:

	
- Contract


	
- CalculationDate


Output:

	
- TotalPrincipalDebt (Financial amount)


Steps:

	
- Set total amount of prescribed loan installments of principal parts PrescribedPrincipalAmount = sum (Installment Part.Amount) having Part Type in (S, ST) and related to Installment having Active Flag =1 and Installment Type = STANDARD and Contract referenced = Contract
	
- Set total paid amount as PaidPrincipalAmount = paidPrincipal from Calculate sum all installment parts paid before passed date algorithm with CalculationDate, Contract as parameter
	
- Calculate result as TotalPrincipalDebt = PrescribedPrincipalAmount - PaidPrincipalAmount

## 🔗 Connections (1)

- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization
