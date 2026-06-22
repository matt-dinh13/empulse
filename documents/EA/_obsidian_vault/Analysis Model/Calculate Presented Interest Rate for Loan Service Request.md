---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833407
diagrams: 7
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Presented Interest Rate for Loan Service Request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes calculation of Presented Interest Rate (or Rates) according the configuration for Loan Services where the contract installment schedule is modified when the service is applied.
Input:

	
- Contract.Financial Parameters (FP)
	
- Loan Service Request object (LSR)


Output: 
- set of  PIR values (percentage) in LSR.LoanServiceRequestPresentedInterestRate

Steps:

	
- Create interface structures Presented IR Parameters (Par) for PIR calculation function and fill the structure as follow:
- Par.ProvidedLoanAmount = FP.Provided Credit Amount
- Par.NominalInterestRate = FP.Interest Rate
- Par.LoanProvidingDate = FP.Loan Providing Date
- Par.Annuity = FP.Annuity
- Par.Term = FP.Terms + LSR.Deferred Periods Number
	
- Par.Presented IR Fee = data from
- For each found active FP.TariffItem from FP fill in (TariffItemType, ItemAmount)
- For each LSR.Service Offer Installment fill in (Installment.Due Date, SOI Part.Amount, Tariff Item Type) where SOI Part.Type = F or P and SOI.Installment Type = EXTRAORDINARY
	
- Par.Presented IR Cash Flow is filled from the LSR.Service Offer Installment (SOI) as follows:
For each Installment from SOI having Installment Type = STANDARD, create record in Par.Presented IR Cash Flow (PICF) with
- PICF.Number = SOI.InstallmentNumber
- PICF.Date = SOI.DueDate
- PICF.Amount = - AnnuityAmount where AnnuityAmount = sum of SOI.ServiceOfferInstallmentPart.Amount where SOI.ServiceOfferInstallmentPart.Type is in (Principal(S), Interest(I)) 
	
- Calculate set of PIRs according to algorithm Calculation of Presented IR Types with parameters:
- Product Type = 'CEL'
- Case = 'STANDARD'
- Presented IR Parameters (Par)
	
- Resulted PIRs are saved LSR.Loan Service Request Presented Interest Rate.

## 🔗 Connections (7)

- → Dependency: [[Calculation of Presented IR types]]
- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[01.796 Get ContractPayholRequest preview service]]
- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]
- ← Dependency: [[{MOD}08.406 Process request for loan restructuring]]
- ← Dependency: [[Prepare virtual IS to change due date]]

## 📊 Appears In (7 diagrams)

- Custom: Business Rules
- Use Case: CHDDR processing
- Use Case: CHDDR request creation - via GUI
- Use Case: Loan restructuring processing
- Use Case: Payment holiday processing
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
