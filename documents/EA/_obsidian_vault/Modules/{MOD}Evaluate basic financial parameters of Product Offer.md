---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1762317
diagrams: 3
connections: 9
tags:
  - requirement
  - modules
---

# 📋 {MOD}Evaluate basic financial parameters of Product Offer 

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

{ADD PCG-707/}
Inputs:

	
- Product
	
- ParCombination
	
- LoanPreferences


	
- OfferParameters


Outputs:

	
- OfferParameters (updated)
	
- Result (Yes/No)


Calculate and save into OfferParameters:
- Fees from SetOfFees (which have not been calculated yet) according to Fees calculation.
- ProvidedCreditAmount (PCA), according to Provided Credit Amount definition.
- ProvidedCreditLimit (PCL), according to Provided Credit Limit definition.
- If LoanPreferences.MarketingAction is defined on input and the same marketing action is assigned to Product then set MarketingActionIndicator to True else set to False

If ProductType = CEL:
// Checking of Provided Credit Limit
Check if 

	
- ParCombination.FinancingScheme.MinimalTransactionAmount <= ProvidedCreditAmount
	
- ParCombination.FinancingScheme.MaximalTransactionAmount >= ProvidedCreditAmount

Limits Maximal/MinimalTransactionAmount are checked only if defined on FinancingScheme.
If not then return Result = False and algorithm ends.

// Calculation of CEL Offer financial parameters
Calculate AnnuityBaseAmount according to Annuity base amount definition.
AIR = FinancingSchemeVariant.AIR
InterestRate = AIR
Term = FinancingSchemeVariant.Term
GenerationMethod = FinancingSchemeVariant.FinancingScheme.InstalmentPlanScheme.GenerationMethod
InstalmentScheduleMethod = GenerationMethod  
DayCountMethod = FinancingSchemeVariant.FinancingScheme.InstalmentPlanScheme.DayCountMethod
AnnuityRoundingMethod, AnnuityRoundingScale = FinancingSchemeVariant.FinancingScheme.InstalmentPlanScheme.(AnnuityRoundingMethod, AnnuityRoundingScale)
Preference = FinancingScheme.FinancingPackageItem.Preference
Calculate Annuity according to Annuity calculation with parameters:
- AIR
- Term
- AnnuityBaseAmount from input 
- InstallmentScheduleMethod = GenerationMethod
- DayCountMethod
- {ADD TFT-11752}If Topup service (ServiceType = TOPUP) is selected on offer, then StartDate = FirstDueDate + TopupInstallmentsNumber(in months) - 1(month), else{/ADD} StartDate = Loan Providing Date calculated in previous steps
- {ADD TFT-11752}If Topup service (ServiceType = TOPUP) is selected on offer, then FirstDueDate = FirstDueDate + TopupInstallmentsNumber(in months), else{/ADD} FirstDueDate = First Due Date calculated in previous steps
- AnnuityRoundingMethod, AnnuityRoundingScale
Check Annuity according to rule Annuity check with parameters 
- Annuity
- AnnuityRoundingMethod, AnnuityRoundingScale
- ProvidedCreditAmount calculated in previous steps
- Term
- GiftPaymentService - parameters of assigned GIFTP service
If not successfully checked then return Result = False and algorithm ends.
Calculate TotalMonthlyPayment according to the rule Total Monthly Payment.
CheckedMonthlyPayment = TotalMonthlyPayment 
// End of evaluation for ProductType = CEL

If ProductType = REL:
// Checking of Provided Credit Limit
Check if 

	
- ParCombination.ProductVariant.CreditAmountMin <= ProvidedCreditLimit
	
- ParCombination.ProductVariant.CreditAmountMax >= ProvidedCreditLimit

Limits CreditAmountMin/Max are checked only if defined on ProductVariant.
If not then return Result = False and algorithm ends.
// Calculation of REL Offer financial parameters
Calculate MinimalMonthlyInstallment according to Presented Minimal Monthly Installment.
CheckedMonthlyPayment = MinimalMonthlyInstallment
Translate ProductVariant.Preference(enumeration) to Preference(integer) according to mapping in Product Preference.
// End of evaluation for ProductType = REL

// Checking of Monthly Payment
Check if 

	
- CheckedMonthlyPayment >= LoanPreferences.MinimalMonthlyPayment


	
- CheckedMonthlyPayment <= LoanPreferences.MaximalMonthlyPayment.

Maximal/MinimalMonthlyPayment are checked only if defined in LoanPreferences.
If not checked successfully then return Result = False and algorithm ends.

Save calculated parameters into OfferParameters.

Return Result = True and algorithm ends.

## 🔗 Connections (8)

- → Dependency: [[{MOD}Presented Minimal Monthly Installment]]
- → Dependency: [[Provided Credit Limit definition]]
- → Dependency: [[{ADD}Annuity check]]
- → Dependency: [[Annuity calculation]]
- → Dependency: [[Provided Credit Amount definition]]
- → Dependency: [[{MOD}Fees calculation]]
- → Dependency: [[Total Monthly Payment definition]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (3 diagrams)

- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Evaluation of Products based on Financing Scheme
- Logical: Various things
