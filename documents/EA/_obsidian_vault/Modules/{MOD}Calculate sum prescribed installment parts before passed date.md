---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623491
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculate sum prescribed installment parts before passed date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This algorithm calculates sums of prescribed installment parts with appropriate types (e.g. "Interest" and "Interest - terminated" are cumulated to the same return value) before a passed calculation date.

Input:

	
- calculationDate


	
- Contract


Output:

	
- prescribedInterest      ...FinancialAmount


	
- prescribedPrincipal     ...FinancialAmount
	
- PrescribedFees     .... array of fee items
- amount   ...FinancialAmount
- tariffItemCode   ... string
{ADD CBL-6282 PAYM-2314 CLM-2048}- tariffItemTypeCode   ... string{/ADD}


Initialization:

	
- System for passed Contract finds Installments[where active = true AND dueDate < calculationDate].
If no record is found, the algorithm returns 
- prescribedInterest = 0
- prescribedPrincipal = 0 
and ends.


A - prescribedInterest:

	
- System from all found Installments selects all Installment->InstallmentPart where partType is in (I, IT).
If no record is found the system sets prescribedInterest = 0.
Else system sets prescribedInterest = sum InstallmentPart.amount

B - prescribedPrincipal:

	
- System from all found Installments selects all Installment->InstallmentPart where partType is in (S, ST).
If no record is found the system sets prescribedPrincipal = 0.
Else system sets prescribedPrincipal = sum InstallmentPart.amount


C - prescribedFees:

	
- From all found Installments, system selects all Installment->InstallmentPart where partType is in (F, FT) and groups records by InstallmentPart.TariffItem -> Tariff Item.Code
	
- For each grouped InstallmentPart, set
- prescribedFees.tariffItemCode = Tariff Item.Code
{ADD CBL-6282 PAYM-2314 CLM-2048}- prescribedFees.tariffItemTypeCode = Tariff Item.Tariff Item Type Code{/ADD}
- prescribedFees.amount = sum (InstallmentPart.Amount)

## 🔗 Connections (2)

- → Dependency: [[Requirement2 - Securitization]]
- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization
