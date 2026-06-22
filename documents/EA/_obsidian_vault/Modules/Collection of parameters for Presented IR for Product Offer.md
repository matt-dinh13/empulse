---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations"
domain: "Modules"
element_id: 1879051
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Collection of parameters for Presented IR for Product Offer

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations

## 📝 Notes

Input: 
- Financial parameters of offer (OFP) 
Output: 
- Presented IR Parameters

Par = Presented IR Parameters
Fee = Presented IR Fee (fees potentially included into PIR calculation)
CFlow = Presented IR Cash Flow

// Hand over OFP parameters 
Create record in Par and set:
- Par.LoanProvidingDate = OFP.LoanProvidingDate 
- Par.ProvidedLoanAmount = OFP.ProvidedCreditAmount
- Par.NominalInterestRate = OFP.InterestRate
- Par.Term = OFP.Terms
- Par.Annuity = OFP.Annuity
Copy OFP.OfferTariffItem (TariffItemType, ItemAmount) into Fee and assign them to Par

// Installments
Generate preliminary Installment schedule according to rule Generation of Preliminary Installment Schedule.
Entity CFlow is filled from the returned installment schedule (IS) as follows:
For each Installment from IS create record in CFlow, assign it to Par and set:
- CFlow.Date = Installment.DueDate 
- CFlow.Amount = - AnnuityAmount where AnnuityAmount is sum of Installment.InstallmentPart.Amount where Installment.InstallmentPart.Type is in [Principal(S), Interest(I)]
If already exists CFlow with the same Date then add - AnnuityAmount to Amount instead of creating a new record.

## 🔗 Connections (1)

- ← Dependency: [[Calculation of Presented IR for Product Offer]]

## 📊 Appears In (1 diagrams)

- Custom: Calculate Product Offer - Auxiliary evaluations
