---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1878857
diagrams: 3
connections: 6
tags:
  - requirement
  - modules
---

# 📋 First Installment Amount

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

Input:
- Already calculated Offer/Contract Financial Parameters (FP)
- Contract.SignDate; if contract has not been signed yet, current date is used instead.

Evaluation of Installment Schedule Method:
Product means currently processed product.
If product offer has been already generated and chosen and OfferFinancialParameters.InstallmentScheduleMethod of this offer is assigned also to Product.ProductProfile then this method is set as InstallmentScheduleMethod. 
Else Installment Schedule Method = Product.ProductProfile.InstallmentScheduleMethod.

If Installment Schedule Method NOT in (IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC) then 
set FirstInstallmentAmount = FP.TotalMonthlyPayment + InFirstInstallmentFees and return.

-- start date for interest calculation
DLP(Date of the Loan Providing) = Contract sign date (date of the first transition to state Signed); if contract has not been signed yet, current date is used instead.

Deferred Interest calculation:
Calculate additional deferred interest by algorithm Deferred Interest calculation with parameters:
- DLP
- FP.FirstDueDate
- FP.ProductVariant.Product.ProductProfile.DayCountMethod
- FP.CreditAmount
- FP.InterestRate
which returns DeferredInterest, EndOfDeferredPeriod

If Installment Schedule Method = IS_ALG_AN_PRINC then 
set FirstInstallmentAmount = FP.TotalMonthlyPayment + DeferredInterest + InFirstInstallmentFees and return.

If Installment Schedule Method = IS_ALG_EQ_PRINC then
FirstInstallmentAmount = FP.Annuity + DeferredInterest + Sum(MonthlyFees) + Sum(ServiceFees paid in the installment as not part of annuity) + InFirstInstallmentFees

For calculation of MonthlyFees see Monthly fees amount definition.
For calculation of ServiceFees see Service fees amount definition.
For calculation of InFirstInstallmentFees see In first installment fees amount definition.

## 🔗 Connections (6)

- ← Dependency: [[{ADD}Generation of CEL Installment Plan]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- → Dependency: [[Monthly fees amount definition]]
- → Dependency: [[Deferred Interest calculation]]
- → Dependency: [[In first installment fees amount definition]]
- → Dependency: [[Service fees amount definition]]

## 📊 Appears In (3 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of IP for Product Offer with Financing Scheme
- Custom: Financial calculations
