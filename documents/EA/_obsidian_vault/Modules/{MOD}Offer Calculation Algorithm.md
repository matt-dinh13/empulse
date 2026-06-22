---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1877738
diagrams: 2
connections: 7
tags:
  - requirement
  - modules
---

# 📋 {MOD}Offer Calculation Algorithm

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

If ProductType = CEL then
 

	
- As parameter Installment Schedule Method for calculation of annuity in particular algorithm is used OfferFinancialParameters/Financial Parameters.InstallmentScheduleMethod.
If Product Offer has not yet been calculated, system gets the method from Product.ProductProfile.ProductProfileInstallmentSchedule where ProductProfileInstallmentSchedule.IsDefault = TRUE.
If offer is calculated using marketing offer (OfferFinancialParameter.MarketingOfferID is not emtpy) with filled attribute jointLendingPartner then get data from installmentPlanScheme where installmentPlanScheme.code = globalParameter.INST_PLAN_SCHEME_FOR_JL.value and use it as parameters:
Installment Schedule Method = InstallmentPlanScheme.generationMethod
Day Count Method = InstallmentPlanScheme.dayCountMethod
Rounding Scale = InstallmentPlanScheme.annuityRoundingScale
Rounding Mode = InstallmentPlanScheme.annuityRoundingMode


	
- If Installment Schedule Method is in (IS_ALG_BASIC, IS_ALG_EXTEND1, IS_ALG_AN_PRINC) and calculated Annuity <= 0 then the offer is ignored and system continues with the next available sub-variant.


Based on setting of the related product (Product.ProductType), system calls a particular algorithm:
 

	
- Calculated flat rate



	
- Fixed flat rate and fixed number of advance payments



	
- Calculated flat rate and cash payment



	
- Standard algorithm (CEL)



	
- Revolving algorithm (REL)



	
- Insurance algorithm (SAI)



Note:
Algorithms CFR, CFR_CP and FFR_AI are considered as deprecated and will be removed.
These algorithms cannot be used with insurance services and other services, which manipulate with installment schedule.

## 🔗 Connections (7)

- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Generalization: [[{DEL}Calculated flat rate and cash payment (CFR_CP)]]
- ← Generalization: [[{MOD}Revolving (REVOLVING)]]
- ← Generalization: [[{MOD}Insurance (INSURANCE)]]
- ← Generalization: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Generalization: [[{MOD}Standard (STND)]]
- ← Generalization: [[{DEL}Calculated flat rate (CFR)]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Offer Calculation algorithms
