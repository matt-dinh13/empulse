---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1877718
diagrams: 2
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Evaluation of product sub-variant

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

// Evaluation of Product Sub-variant for Product without Financing Scheme 

Inputs:

	
- Product sub-variant
	
- Set of Sales parameters
	
- Set of loan preferences
	
- Set of additional limits for optional offers
	
- Set of global parameters

For detail see parent rule Calculate product offer.

Outputs:

	
- Product offer (if complies with inputs)


Steps:

If globalParameter.MtcaccServiceUsage (PCG_MTCACC_USAGE) = true and ProductType = REL then following attributes are taken from service where Product.Service.ServiceType = MTCACC 
- Min Installment Base
- Min Installment Rate
- Min Installment Fixed Amount
- Min Installment Rounding Scale
- Installment Prescription Min Limit
- Credit Amount Min
- Credit Amount Max

If Product.ProductFlag.ProductFlagType.Code = ACCEPT_VAR_PARAM_FROM_INPUT and ((Product.ProductType = CEL and Product.InitialTransactionType = CASH) or Product.ProductType = SAI) the following attributes are taken from input instead of ProductVariant:
- terms = Number of terms
- interestRate = Interest rate
If any of the attributes is missing it is taken from ProductVariant.
If Product.ProductType = SAI and interestRate is missing then interestRate = 0.
If one of the attributes is missing then offer is ignored and system continues with the next available sub-variant.
 

	
- // Filtering of Product Variants 
If PricingCategory is defined then only Product Variants are taken into account where:
PricingCategory >= ProductVariant.PricingCategoryFrom if PricingCategoryFrom is defined
PricingCategory <= ProductVariant.PricingCategoryTo if PricingCategoryTo is defined
If globalParameter.ExcludeProductVariantWithoutPricingCategory (CALC_EXCLUDE_PROD_VAR_WO_PC) = true and PricingCategory is defined in LoanPreferences then only those Product Variants are taken into account where PricingCategoryFrom or/and PricingCategoryTo is defined.{/ADD}
{ADD PCG-3411}If globalParameter.ExcludeProductVariantWithoutPricingCategory (CALC_EXCLUDE_PROD_VAR_WO_PC) = true and PricingCategory is not defined in LoanPreferences then only those Product Variants are taken into account where PricingCategoryFrom or/and PricingCategoryTo are not defined.
	
- If globalParameter.InsuranceOnOfferDurationLimit (PCG_LIMIT_OFFER_INS_BY_TERMS) = true and Service.Category = INSURANCE and Service.FirstPeriodDuration in (TERM_COUNT, TERM_COUNT_WITH_LIMIT) then check that Service.FirstPeriodDurationOffset >= Product.productVariant.Term. If not then variant is ignored and continue with next available sub-one.
	
- For each assigned service on offer system performs Service limit check. 
If service is not eligible then remove it from the offer.
For each serviceType if there is more services assigned then serviceType.MaxServiceOnOffer the offer is ignored and system continues with next available sub-variant.
If ProductToService.Obligation = MANDATORY and there is no service of that ServiceType assigned then system continues with next available sub-variant.
	
- For each of the selected insurance services system calculates estimated insurance period according the rule Determine First Insurance Period with following parameters:
- insurance service
- date sent to approval = current date
- date signed = current date
- transaction signed = (If ProductType = REL and Offer Financial Parameters.Initial Transaction in (POS, CASH) then current date else NULL)
- date activated = current date
- term = (If ProductType = CEL or SAI then term of current product sub-variant else NULL)
Other parameters of the rule remain unset.
	
- Financial parameters
System calculates offer financial parameters according to the rule Calculation of Financial Parameters of offer.
	
- Additional limits check (only for generating of optional offers)
In case the corresponding parameter is defined in LAP vector or in OfferPreferences then system checks:
- Required.cashPayment_Min =< calculated CashPayment <= Required.cashPayment_Min 
- Required.creditAmount_Min =< calculated NetCreditAmount <= Required.creditAmount_Max
- Required.paymentNum_Min =< calculated Term <= Required.paymentNum_Max
For ProductType = CEL:
- Required.annuity_Min =< calculated TotalMonthlyPayment <= Required.annuity_Max
- Required.EIR_Min=< calculated EIR <= Required.EIR_Max
(for ProductType = CEL the calculated EIR = ProductVariant.AIR)
For ProductType = REL:
- calculated Net Credit Limit >= calculated Net Credit Amount
If any condition is not satisfied, the offer is ignored and system continues with the next available sub-variant.
	
- Offer duplicity check (only for other than debit products, i.e. NOT(ProductType = REL and ProductProfile.IsDebit = TRUE))
System checks duplicity of the generated offer according to rule Offer duplicity. 
If a duplicate offer is found, the current one is ignored and system continues with the next available sub-variant.
	
- Campaign offer
If a campaign (CO) was defined on input, system checks (only if particular input is available in CO):
- checked amount <= CO.Maximal credit amount where checked amount = NCA for ProductType = CEL else if ProductType = REL then checked amount = NCL.
- checked amount <= CO.Maximal monthly payment where checked amount = TotalMonthlyPayment for ProductType = CEL or SAI else if ProductType = REL then checked amount = PresentedMinimalMonthlyInstallment.
- CashPayment >= CO.MinimalCashPayment
- (CashPayment / GoodsPrice) >= CO.relativeMinCashPayment
If all the checks passes, system stores information about the campaign offer to the generated product offer and continues as follows, otherwise the generated offer is ignored and system continues with the next available sub-variant.
	
- Marketing action
System stores information about marketing action to the generated offer:
- If a particular marketing action was present on input, system marks product offer only if product is related to the action (i.e. Product->MarketingAction).
If no marketing action was present on input, system marks product if it is related to any marketing action. The indication of marketing action is then used in GUI.
	
- If ProductType = REL 
- and InitialTransactionType is in (POS, CASH) 
- and service of type RELIP was selected for the offer 
then generate offers for initial transaction IP according to rule Calculate RELIP offers for Initial Transaction and assign them to Offer RELIP Service as Offer RELIP Service Variant. 
If LoanPreferences.MaximalTerm is defined on input 
- and GlobalParameter.FilterRELOffersWithoutIP = TRUE 
- and offer is generated without RELIP service variant
then generated offer is ignored and system continues with the next available sub-variant.

## 🔗 Connections (7)

- → Dependency: [[Service limit check]]
- → Dependency: [[Offer duplicity]]
- → Dependency: [[Calculate RELIP offers for Initial Transaction]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[Total Monthly Payment definition]]
- → Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of product sub-variant
