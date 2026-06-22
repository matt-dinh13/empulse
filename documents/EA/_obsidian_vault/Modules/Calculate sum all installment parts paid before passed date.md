---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623488
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculate sum all installment parts paid before passed date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

This algorithm calculates sums of installment parts with appropriate types (e.g. "Interest" and "Interest - terminated" are cumulated to the same return value) which were paid before a passed calculation date.


Input:

	
- calculationDate


	
- Contract


Output:

	
- paidInterest      ...FinancialAmount


	
- paidPrincipal     ...FinancialAmount


Initialization:

	
- System for passed Contract finds Installments[where active = true].
If no record is found, the algorithm returns 
- paidInterest = 0
- paidPrincipal = 0    
and ends.


A - paidInterest:

	
- System from all found Installments selects all Installment->InstallmentPart where partType is in (I, IT).
If no record is found the system sets paidInterest = 0.
	
- system calculates PaidInterest as sum of pairIf SecuritizationUseDepositDate = TRUE (system property) then
- system calculates PaidInterest as sum of paired amounts to the Installment Parts found with payment deposit dates before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having Incoming Payment Pairing.Archived = false and Incoming Payment.Deposit Date < calculationDate)
- Else ed amounts to the Installment Parts found with paired date before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having IncomingPaymentPairing.archived = false AND pairingDate < calculationDate).
If no record is found the system sets paidInterest = 0.
	
- System sets paidInterest = PaidInterest



B - paidPrincipal:

	
- System from all found Installments selects all Installment->InstallmentPart where partType is in (S, ST).
If no record is found the system sets paidPrincipal= 0.
	
- If SecuritizationUseDepositDate = TRUE (system property) then
- system calculates PaidPrincipal as sum of paired amounts to the Installment Parts found with payment deposit dates before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having Incoming Payment Pairing.Archived = false and Incoming Payment.Deposit Date < calculationDate)
- Else system calculates PaidPrincipal as sum of paired amounts to the Installment Parts found with paired date before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having IncomingPaymentPairing.archived = false AND pairingDate < calculationDate)
If no record is found the system sets paidPrincipal= 0.
	
- System sets paidPrincipal = PaidPrincipal

## 🔗 Connections (2)

- → Dependency: [[Requirement2 - Securitization]]
- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization
