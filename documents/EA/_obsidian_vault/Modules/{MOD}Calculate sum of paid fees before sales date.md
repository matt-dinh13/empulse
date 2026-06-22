---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1623490
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculate sum of paid fees before sales date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

The rule describes calculation TotalPaidFee. Paid amount for each tariff item of fee type is calculated from payments paired before sales date on installment parts (Part Type = F, FT) - regardless of due date.

Input:

	
- calculationDate


	
- Contract


Output:

	
- PaidFees    ....array of penalty items
- tariffItemCode  ... string
{ADD CBL-6282 PAYM-2314 CLM-2048}- tariffItemTypeCode   ... string{/ADD}
- amount  ...FinancialAmount

Steps:

	
- System gets all active Installments having InstallmentPart.PartType in (F, FT) and groups records by InstallmentPart.TariffItem -> Tariff Item.Code
If no record is found scenario ends
	
- For each grouped InstallmentParts, system
2.1 sets tariffItemCode = Tariff Item.Code{ADD CBL-6282 PAYM-2314 CLM-2048}, tariffItemTypeCode = Tariff Item.Tariff Item Type Code{/ADD} and prescribedPenalties = sum InstallmentPart.Amount from the Installments
2.2 If SecuritizationUseDepositDate = TRUE (system property) then
- calculates PaidFee as sum of paired amounts to the Installment Parts found with payment deposit dates before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having Incoming Payment Pairing.Archived = False and Incoming Payment.Deposit Date < calculationDate)
- Else calculates PaidFee as sum of paired amounts to the Installment Parts found with paired date before sales date (i.e. sum (IncomingPaymentPairing.PairedAmount) related to the InstallmentParts found having IncomingPaymentPairing.archived = False AND pairingDate < calculationDate)
If no record is found the system sets amount = 0 else sets amount = PaidFee
	
- Scenario ends

## 🔗 Connections (1)

- ← Dependency: [[01.863 Perform contract securitization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Use Case: Contract securitization
