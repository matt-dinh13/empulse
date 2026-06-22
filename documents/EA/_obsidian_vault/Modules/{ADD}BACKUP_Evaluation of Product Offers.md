---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1778244
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}BACKUP_Evaluation of Product Offers

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

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

// First Insurance Period
For each selected InsuranceService from SetOfServices calculate estimated start and end of insurance period according the rule Determine First Insurance Period with following parameters:
- InsuranceService
- date sent to approval = current date
- date signed = current date
- transaction signed = current date
- date activated = current date
- term = NULL (not defined)
Other parameters of the rule remain unset.

If InitialTransationType <> POS then 
Calculate NetCreditAmount (NCA) and NetCreditLimit (NCL) according to rule Evaluate NetCreditAmount and Limit. 
If returned Result = False then return and algorithm ends.

If InitialTransationType = NDF then 
Calculate offer parameters according to Evaluate basic financial parameters of Product Offer. 
If returned Result = False then return and algorithm ends.
Execute algorithm Add Product Offer with parameters:

	
- OfferFinancialParameters


	
- ProductVariant
	
- Marketing Offer from LoanPreferences
	
- FinancingPackage = not defined
	
- FinancingScheme = not defined
	
- SetOfSelectedFSVariants = not defined


	
- SetOfProductOffers

Return and algorithm ends.

// Product with Initial Transaction

// Searching for Financing Packages
Define ProductFinancingPackages as set of Financing Packages assigned to Product.
Define TransactionProperties as follows:
- ValidityDate = current date + time
- TransactionDate = current date + time
- If ProductType = CEL then Purpose = ICEL (Initial CEL Transaction)
- If ProductType = REL then Purpose = ICT (Initial Card Transaction)
- If InitialTransationType = POS then TransactionType = IPD
- If InitialTransationType = CASH then TransactionType = ICD
- Merchant = not defined
- If InitialTransationType = POS then Properties.Commodity.(CommodityType, Price, Model, Manufacturer) are taken from LoanPreferences.
Execute algorithm Filter Financing Packages with parameters
- ProductFinancingPackages
- TransactionProperties
which returns 
- SetOfFinancingPackages.
If SetOfFinancingPackages is empty then 
- return empty SetOfProductOffers
- algorithm ends.
end if

// Subventions
If InitialTransationType = POS then 
- TotalPrice = sum of (LoanPreferences.Commodity.Price)
- Calculate subventions according to algorithm Subvention amount definition from TotalPrice and based on the result values set
- SubventionDiscount = SPPAD + SPMMAD.
- TotalPrice = TotalPrice - SubventionDiscount
else
- TotalPrice = 0
end if

// Evaluation of Financing Packages
For each FinancingPackage from SetOfFinancingPackages execute following steps:

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
If value of any fee cannot be calculated because of missing base for calculation of fee limit or amount then continue with the next FinancingPackage.

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
If Checked = False then continue with the next FinancingPackage.

// CashPayment
Execute algorithm Evaluate Cash Payment with parameters:
- DownPayment
- FeesPaidInAdvance
- MinCashPaymentLimit
- MaxCashPaymentLimit
which returns
- CashPayment
- Checked
If Checked = False then continue with the next FinancingPackage.

If InitialTransationType = POS then 
Calculate NetCreditAmount (NCA) and NetCreditLimit (NCL) according to rule Evaluate NetCreditAmount and Limit. 
If returned Result = False then continue with the next FinancingPackage.

// For all Products 
Calculate offer parameters according to Evaluate basic financial parameters of Product Offer. 
If returned Result = False then continue with the next FinancingPackage.

If ProductType = REL then 
// Checking if initial transaction can be transformed to Installment Plan
If a Service of type IPPACK is in SetOfServices and exists option Service.Purpose = ICT then 
- TransactionAmount = NetCreditAmount.
- GenerateIP = True
else 
- GenerateIP = False

If ProductType = CEL then 
- TransactionAmount = ProvidedCreditAmount
- GenerateIP = True

If GenerateIP = True then
// Searching for Financing Scheme Variants
Define FinancingPackageSchemes as set of Financing Schemes assigned to Financing Package.
Define TransactionProperties as follows:
- ValidityDate = current date + time
- TransactionAmount
- PricingCategory is taken from LoanPreferences.
Execute algorithm Filter Financing Scheme Variants with parameters
- FinancingPackage
- FinancingPackageSchemes 
- TransactionProperties
- SetOfFinancingSchemeVariants.
If returned SetOfFinancingSchemeVariants is empty then: 

// IP is optional for REL products and will be generated later in separate step of Product Offer evaluation
If ProductType = REL then 
- Execute algorithm Add Product Offer with parameters:

	
- OfferFinancialParameters


	
- ProductVariant
	
- Marketing Offer from LoanPreferences
	
- FinancingPackage
	
- FinancingScheme = not defined


	
- SetOfFinancingSchemeVariants


	
- SetOfProductOffers

- Continue with the next FinancingPackage.

// IP is mandatory for CEL products 
If ProductType = CEL and returned SetOfFinancingSchemeVariants is empty then continue with the next FinancingPackage.

// Evaluation of Installment Plan for CELs
Calculate AnnuityBaseAmount according to Annuity base amount definition.

For each FinancingSchemeVariant from SetOfFinancingSchemeVariant

Execute algorithm Evaluation of parameters for CEL Installment Plan.

If returned Result = True then execute algorithm Add Product Offer with parameters:

	
- OfferFinancialParameters


	
- ProductVariant
	
- Marketing Offer from LoanPreferences
	
- FinancingPackage
	
- FinancingScheme from FinancingSchemeVariant 


	
- SetOfFinancingSchemeVariants = FinancingSchemeVariant


	
- SetOfProductOffers


Continue with the next FinancingSchemeVariant.

Continue with the next FinancingPackage.

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
