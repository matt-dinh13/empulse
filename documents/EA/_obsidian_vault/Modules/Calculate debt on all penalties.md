---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623484
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculate debt on all penalties

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

Two items of the penalty debt are calculated:

	
- TotalPaidPenalty - Paid amount is calculated from payments paired before sales date on installment parts (Part Type = P) - regardless of due date.
	
- TotalPrescribedPenalty - Sum of all installment parts (Part Type = P) regardless of due date.


Input:

	
- calculationDate


	
- Contract


Output:

	
- PenaltyDebt    ....array of penalty items
- tariffItemCode  ... string
- paidAmount  ...FinancialAmount
- prescribedAmount  ...FinancialAmount


Steps:

	
- System gets all active Installments having InstallmentPart.PartType = P (Penalty) and groups records by InstallmentPart.TariffItem -> Tariff Item.Code
If no record is found then scenario ends
	
- For each grouped InstallmentParts, system
2.1 sets tariffItemCode = Tariff Item.Code and prescribedAmount  = sum InstallmentPart.Amount from the Installments
2.2 If SecuritizationUseDepositDate = TRUE (system property) then
- calculates PaidPenalties as sum of paired amounts to the Installment Parts found with payment deposit dates before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having Incoming Payment Pairing.Archived = False and Incoming Payment.Deposit Date < calculationDate)
- Else calculates PaidPenalties as sum of paired amounts to the Installment Parts found with paired date before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having IncomingPaymentPairing.archived = False AND pairingDate < calculationDate)
If no record is found the system sets paidAmount  = 0 else sets paidAmount  = PaidPenalties
	
- Scenario ends

## 🔗 Connections (1)

- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization
