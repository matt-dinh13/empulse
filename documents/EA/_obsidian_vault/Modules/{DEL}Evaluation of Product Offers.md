---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1778243
diagrams: 4
connections: 10
tags:
  - requirement
  - modules
---

# 📋 {DEL}Evaluation of Product Offers

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

{DEL PCG-707/}
// Is substituted by NEW_Evaluation of Product Offers for PCG-707

// Evaluation of Product Offers for Products with allowed Financing Scheme 
// Only REL credit products are supported (IsDebit = False)

Inputs:

	
- Product
	
- LoanPreferences


	
- OfferParameters - SetOfServices, SetOfFees, FirstDueDate


Outputs:

	
- SetOfProductOffers


Initialize (clear) SetOfProductOffers, SetOfProductVariants, SetOfFinancingPackages, SetOfFinancingSchemeVariants.
InitialTransactionType = Product.ProductProfile.InitialTransactionType

// First Insurance Period
For each selected InsuranceService from SetOfServices calculate estimated start and end of insurance period according the rule Determine First Insurance Period with following parameters:
- InsuranceService
- date sent to approval = current date
- date signed = current date
- transaction signed = current date
- date activated = current date
- term = NULL (not defined)
Other parameters of the rule remain unset.

// Fees Paid In Advance
// Potential base for calculation of FeesPaidInAdvance 
If InitialTransationType <> POS then calculate 

	
- NetCreditLimit (NCL) according to Net credit limit definition.


	
- NetCreditAmount (NCA), according to Net credit amount definition.

Calculate amount of FeesPaidInAdvance from the SetOfFees with following properties of corresponding TariffItemType (TIT):
- TIT.UsageType = Standard (A) or UsageType = Service(S)
- TIT.ChargingPeriodicity = ONE_TIME
- TIT.ToPrinciple = False
If value of any fee cannot be calculated because of missing base for calculation of fee limit or amount then return empty SetOfProductOffers and algorithm ends.

If InitialTransationType = NDF then continue in step :PRODUCT_VARIANTS

// Product with Initial Transaction
// Searching for Financing Packages
Define ProductFinancingPackages as set of Financing Packages assigned to Product.
Define TransactionProperties as follows:
- ValidityDate = current date + time
- TransactionDate = current date + time
- Purpose = ICT (Initial Card Transaction)
- If InitialTransationType = POS then TransactionType = IPD
- If InitialTransationType = CASH then TransactionType = ICD
- Merchant = not defined
{ADD PCG-1687}- maxTerm and minTerm are taken from LoanPreferences{/ADD}
- If InitialTransationType = POS then Properties.Commodity.(CommodityType, Price, Model, Manufacturer) are taken from LoanPreferences
Execute algorithm Filter Financing Packages with parameters
- ProductFinancingPackages
- TransactionProperties
which returns 
- SetOfFinancingPackages.

If SetOfFinancingPackages is empty and InitialTransationType is in (POS, CASH) then return empty SetOfProductOffers.

// Subventions (defined on Product level)
If InitialTransationType = POS then
-- TotalPrice = sum of (LoanPreferences.Commodity.Price)
-- Calculate subventions according to algorithm Subvention amount definition from TotalPrice and based on the result values set
-- SubventionDiscount = SPPAD + SPMMAD.
-- TotalPrice = TotalPrice - SubventionDiscount

// Checking if REL initial transaction can be transformed to Installment Plan
If NOT (a Service of type IPPACK is assigned to Product and was selected for product offer in previous steps and exists option Service.Purpose = ICT and InitialTransationType is in (POS, CASH)) then continue in step :PRODUCT_VARIANTS

For each FinancingPackage from SetOfFinancingPackages execute following steps:

// Searching for Financing Scheme Variants
Define FinancingPackageSchemes as set of Financing Schemes assigned to Financing Package.
Define TransactionProperties as follows:
- ValidityDate = current date + time
- TransactionAmount is not defined
- PricingCategory is taken from LoanPreferences.
Execute algorithm Filter Financing Scheme Variants with parameters
- FinancingPackage
- FinancingPackageSchemes 
- TransactionProperties
- SetOfFinancingSchemeVariants.

Continue with the next FinancingPackage.

If SetOfFinancingSchemeVariants is not empty then fill SetOfFinancingSchemes by unique set of FinancingSchemes from SetOfFinancingSchemeVariants (inclusive reference to Financing Package).

LoanProvidingDate = Current Date + Time

:PRODUCT_VARIANTS

For each ProductVariant from Product.ProductVariant execute following steps:

// Checking of PricingCategory
If PricingCategory is defined in LoanPreferences then check following rules: 

	
- ProductVariant.PricingCategoryFrom <= PricingCategory
	
- ProductVariant.PricingCategoryTo >= PricingCategory

Limit PricingCategoryFrom/To is checked only if defined on ProductVariant.
If any condition is not satisfied then continue with the next ProductVariant

{ADD PCG-1457}For each FinancingPackage from Product.FinancingPackage execute following steps:{/ADD}

Initialize limits:
-- MinDownPaymentLimit, MaxDownPaymentLimit
-- MinCashPaymentLimit, MaxCashPaymentLimit
-- MinCreditAmountLimit, MaxCreditAmountLimit
as not defined.

// Initial Payment Limits on Financing package level
Execute algorithm {DEL PCG-1457}Evaluate Initial Payment Limits for Product Variant{/DEL}{ADD PCG-1457}Evaluate Initial Payment Limits for Financing Package{/ADD}with parameters 
-- {DEL PCG-1457}ProductVariant{/DEL}{ADD PCG-1457}FinancingPackage{/ADD}
-- TotalPrice
which returns
-- MinDownPaymentLimit
-- MaxDownPaymentLimit
-- MinCashPaymentLimit
-- MaxCashPaymentLimit
-- MinCreditAmountLimit
-- MaxCreditAmountLimit

// Calculation of Product Offer parameters
Execute algorithm Evaluate Product Offer Financial Parameters with parameters
- Product
- LoanPreferences
- OfferParameters evaluated and calculated in previous steps
- FeesPaidInAdvance
- MinCashPaymentLimit
- MaxCashPaymentLimit
- MinDownPaymentLimit
- MaxDownPaymentLimit
- MinCreditAmountLimit
- MaxCreditAmountLimit
which returns
- ProductOfferFinancialParameters 
{ADD PCG-1457}If no ProductOfferFinancialParameters returned then continue with the next FinancingPackage{/ADD}
If no ProductOfferFinancialParameters returned then continue with the next ProductVariant

// ProductOffer without InstallmentPlan
If SetOfFinancingSchemeVariants is empty then execute algorithm Add Product Offer with parameters:

	
- ProductOfferFinancialParameters
	
- Preference = ProductVariant.Preference


	
- ProductVariant
	
- Marketing Offer from LoanPreferences
	
- FinancingPackage = not defined
	
- FinancingScheme = not defined
	
- SetOfSelectedFSVariants = not defined


	
- SetOfProductOffers


{ADD PCG-1457}Continue with the next FinancingPackage{/ADD}
Continue with the next ProductVariant 
// End of calculation of Financial Parameters for ProductOffer without InstallmentPlan


// ProductOffers with InstallmentPlan
For each FinancingScheme from SetOfFinancingSchemes execute following steps:
// Note that Tariff and Initial Payment Limits defined on Financing Scheme are ignored in Product Offer Calculation

// Set of Financing Scheme Variants which will be later used for generation of Installment Plan 
SetOfSelectedFSVariants are variants from SetOfFinancingSchemeVariants where FinancingSchemeVariant.FinancingScheme = FinancingScheme. 
Execute algorithm Add Product Offer with parameter:

	
- ProductOfferFinancialParameters
	
- Preference = FinancingScheme.Preference


	
- ProductVariant
	
- Marketing Offer from LoanPreferences
	
- FinancingPackage
	
- FinancingScheme
	
- SetOfSelectedFSVariants


	
- SetOfProductOffers


Continue with the next FinancingScheme 
// End of calculation of Financial Parameters for ProductOffer with InstallmentPlan

{ADD PCG-1457}Continue with the next FinancingPackage{/ADD}
Continue with the next ProductVariant 

Return SetOfProductOffers

## 🔗 Connections (9)

- → Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- → Dependency: [[{MOD}Subvention amount definition]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[{MOD}Filter Financing Scheme Variants]]
- → Dependency: [[Evaluate Initial Payment Limits for Financing Package]]
- → Dependency: [[{MOD}Filter Financing Packages]]
- → Dependency: [[{MOD}Add Product Offer]]
- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (4 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculate product offer
- Custom: Evaluation of Products based on Financing Scheme
- Custom: Offer recalculation
