---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1778240
diagrams: 3
connections: 13
tags:
  - requirement
  - modules
---

# 📋 {MOD}NEW_Evaluation of Product Offers

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

{ADD PCG-707/}
// Substitutes original Evaluation of Product Offers for PCG-707

// Evaluation of Product Offers for Products with allowed Financing Scheme 
// Only REL credit products are supported (IsDebit = False)

Inputs:

	
- Product
	
- LoanPreferences


	
- OfferParameters - SetOfServices, SetOfFees, FirstDueDate


Outputs:

	
- SetOfProductOffers


Initialize (clear) SetOfProductOffers, SetOfProductVariants, SetOfFinancingPackages, SetOfFinancingSchemeVariants.
InitialTransationType = Product.ProductProfile.InitialTransationType

// Collection of Product parameters
// Evaluation of REL Product Variants
If ProductType = REL and globalParameter.UseExternalRelOfferCalculation (USE_EXT_REL_OFFER_CALCULATION) = false:
Find all Product Variants from Product.ProductVariant and put them into SetOfProductVariants.
If PricingCategory is defined in LoanPreferences then select only such Product Variants where 

	
- ProductVariant.PricingCategoryFrom <= PricingCategory
	
- ProductVariant.PricingCategoryTo >= PricingCategory

Limits PricingCategoryFrom/To are checked only if defined on ProductVariant.
If globalParameter.ExcludeProductVariantWithoutPricingCategory (CALC_EXCLUDE_PROD_VAR_WO_PC) = true and PricingCategory is defined in LoanPreferences then only those Product Variants are taken into account where PricingCategoryFrom or/and PricingCategoryTo is defined.
If globalParameter.ExcludeProductVariantWithoutPricingCategory (CALC_EXCLUDE_PROD_VAR_WO_PC) = true and PricingCategory is not defined in LoanPreferences then only those Product Variants are taken into account where PricingCategoryFrom or/and PricingCategoryTo are not defined.

If SetOfProductVariants is empty then 
- return empty SetOfProductOffers
- algorithm ends.
end if
// End of evaluation of REL Product Variants

// Calculating of offer parameters for REL in external system
If ProductType = REL and globalParameter.UseExternalRelOfferCalculation(USE_EXT_REL_OFFER_CALCULATION) = true:
Data for account are taken from MTCACC service (and not from product variant) as follows:
credit amount min = SetOfService.service.mtcacc.creditAmnountMin
credit amount max =  SetOfService.service.mtcacc.creditAmnountMax
min installment base = SetOfService.service.mtcacc.minInstallmentBase
min installment rate = SetOfService.service.mtcacc.minInstallmentRate
min installment fixed amount = SetOfService.service.mtcacc.minInstallmentFixedAmount
min installment rounding method = SetOfService.service.mtcacc.minInstallmentRounding
min installment rounding scale = SetOfService.service.mtcacc.minInstallmentRoundingScale
min limit for installment prescription = SetOfService.service.mtcacc.installmentPrescriptionMinLimit

Calculate REL offer externally by calling AP API (OfferCalculation) with LoanPreferences and OfferParameters data on input.
  If LAP Offer vector.isRelToOriginalCEL = True then fill attributes from original offer (OOFP = offerFinancialParameters of original offer)
  - sumOfSubventions.code - OOFP.OFPItem.OfferSubventionItem.code where Participant = P (Partner) and Purpose = STANDARD
  - sumOfSubventions.amount - OOFP.OFPItem.ItemAmount where OOFP.OFPItem.ItemType = SUBVENTION and Participant = PARTNER and Purpose = STANDARD
  - numberOfGiftPayments -  Service.NumberOfGiftPayments for service with OOFP.OfferService.ServiceCode and OOFP.OfferService.ServiceVersion and Service.ServiceType = GIFTP
  - PIRYearly - OOFP.OfferPresentedInterestRate.value for PresentedIRSetting.PIRType = EIR_Y

Result is saved to SetOfProductOffers
end if

// Search for Financing Packages
If InitialTransactionType <> NDF:
Define ProductFinancingPackages as set of Financing Packages assigned to Product.
Define TransactionProperties as follows:
- ValidityDate = current date + time
- TransactionDate = current date + time
- If ProductType = CEL then Purpose = ICEL (Initial CEL Transaction)
- If ProductType = REL then Purpose = ICT (Initial Card Transaction)
- If InitialTransationType = POS then TransactionType = IPD
- If InitialTransationType = CASH then TransactionType = ICD
- Merchant = not defined
- maxTerm and minTerm are taken from LoanPreferences
- If InitialTransationType = POS then Properties.Commodity.(CommodityType, Price, Model, Manufacturer) are taken from LoanPreferences.
{ADD PCG-4278}Segment is taken from LoanPreferences (value of StrucutredParameters.Attributes.Value for StructuredParameters.Type = FINANCING_PACKAGE_CRITERION, StructuredParameters.Attributes.Type = SEGMENT){/ADD}
Execute algorithm Filter Financing Packages with parameters
- ProductFinancingPackages
- TransactionProperties
which returns 
- SetOfFinancingPackages.
If SetOfFinancingPackages is empty then 
- return empty SetOfProductOffers
- algorithm ends.
end if
// End of Searching of Financing Packages
// Check if initial transaction can be transformed to Installment Plan
If ProductType = CEL 
OR
(ProductType = REL and Service of type IPPACK is in SetOfServices and exists option Service.Purpose = ICT and globalParameter.UseExternalRelOfferCalculation (USE_EXT_REL_OFFER_CALCULATION) = false) then 
GenerateIP = True
Else
GenerateIP = False
// Search for Financing Scheme Variants
If GenerateIP = True then:
Define FinancingPackageSchemes as set of FinancingPackage.FinancingPackageItem.Financing Schemes assigned to each Financing Package from SetOfFinancingPackages.
Define TransactionProperties as follows:
- ValidityDate = current date + time
- PricingCategory and MaxTerm are taken from LoanPreferences
- TransactionAmount is not defined
Execute algorithm Filter Financing Scheme Variants with parameters
- FinancingPackageSchemes 
- TransactionProperties
If ProductType = CEL and returned SetOfFinancingSchemeVariants is empty then
- return empty SetOfProductOffers
- algorithm ends.
end if
// End of Searching of Financing Scheme Variants
//  End of Collection of Product parameters

// Evaluation of Product Offers
Create SetOfProductParCombinations as all combinations of each
- ProductVariant from SetOfProductVariants (mandatory and available only for REL Products)
- FinancingPackage from SetOfFinancingPackages (mandatory and available only for Products with initial transaction)
--- FinancingSchemeVariant related to superior FinancingPackage (mandatory and available only for Products with installment plan) 

For each ParCombination from SetOfProductParCombinations execute following steps:

// First Insurance Period
For each selected InsuranceService from SetOfServices calculate estimated start and end of insurance period according to rule Determine First Insurance Period with following parameters:
- InsuranceService
- date sent to approval = current date
- date signed = current date
- transaction signed = current date
- date activated = current date
- term = NULL (not defined)
Other parameters of the rule remain unset.

If InitialTransationType <> POS then 
Calculate NetCreditAmount (NCA) and NetCreditLimit (NCL) according to rule Evaluate NetCreditAmount and Limit. 
If returned Result = False then continue with the next ParCombination.

If InitialTransationType = NDF then 
Calculate offer parameters according to Evaluate basic financial parameters of Product Offer. 
If returned Result = False then continue with the next ParCombination.
Continue in step :ADD_OFFER

// Product with Initial Transaction
If InitialTransationType <> NDF then 
If Combination does not contain FinancingPackage then continue with the next ParCombination.

// Subvention - calculate subvention on financing package
If InitialTransactionType = POS then 
- TotalPrice = sum of (LoanPreferences.Commodity.Price)
- calculate subvention according 04.419 Calculate Subvention 
- if isDiscount = 1 then SubventionDiscount = subventionAmount else SubventionDiscount = 0 end if
- TotalPrice = TotalPrice - SubventionDiscount
else
- TotalPrice = 0
end if

Execute algorithm Evaluate Initial Payment Limits for Financing Package with parameters 
- FinancingPackage
- TotalPrice
which returns
- MinDownPaymentLimit
- MaxDownPaymentLimit
- MinCashPaymentLimit
- MaxCashPaymentLimit 

// Fees Paid In Advance
Calculate amount of FeesPaidInAdvance from the SetOfFees with following properties of corresponding TariffItemType (TIT):
- TIT.UsageType = Standard (A) or UsageType = Service(S)
- TIT.ChargingPeriodicity = ONE_TIME
- TIT.ToPrinciple = False
If value of any fee cannot be calculated because of missing base for calculation of fee limit or amount then continue with the next ParCombination.

// DownPayment
DownPayment = 0
If InitialTransationType = POS then execute algorithm Evaluate Down Payment with parameters:
- LoanPreferences
- FeesPaidInAdvance
- MinCashPaymentLimit
- MinDownPaymentLimit
- MaxDownPaymentLimit
which returns
- DownPayment
- Checked
If Checked = False then continue with the next ParCombination.

// CashPayment
Execute algorithm Evaluate Cash Payment with parameters:
- DownPayment
- FeesPaidInAdvance
- MinCashPaymentLimit
- MaxCashPaymentLimit
which returns
- CashPayment
- Checked
If Checked = False then continue with the next ParCombination.

If InitialTransationType = POS then 
Calculate NetCreditAmount (NCA) and NetCreditLimit (NCL) according to rule Evaluate NetCreditAmount and Limit. 
If returned Result = False then continue with the next ParCombination.

For all Products 
Calculate offer parameters according to Evaluate basic financial parameters of Product Offer. 
If returned Result = False then continue with the next ParCombination.

:ADD_OFFER
Execute algorithm Add Product Offer with parameters:

	
- OfferFinancialParameters


	
- ProductVariant
	
- Marketing Offer from LoanPreferences
	
- FinancingPackage
	
- FinancingScheme


	
- FinancingSchemeVariant


	
- SetOfProductOffers


Continue with the next ParCombination.

## 🔗 Connections (12)

- → Dependency: [[{MOD}Filter Financing Scheme Variants]]
- → Dependency: [[Evaluate Down Payment]]
- → Dependency: [[{ADD}Evaluate NetCredit Amount and Limit]]
- → Dependency: [[{MOD}Evaluate Cash Payment]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- → Dependency: [[{MOD}Subvention amount definition]]
- → Dependency: [[Evaluate Initial Payment Limits for Financing Package]]
- → Dependency: [[{MOD}Filter Financing Packages]]
- → Dependency: [[{MOD}Add Product Offer]]
- ← Dependency: [[{MOD}Calculate product offer]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of Products based on Financing Scheme
- Custom: Offer recalculation
