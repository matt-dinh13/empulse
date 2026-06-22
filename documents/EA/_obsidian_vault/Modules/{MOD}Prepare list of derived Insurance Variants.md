---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection/Insurance evaluation"
domain: "Modules"
element_id: 1774321
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Prepare list of derived Insurance Variants

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Product and Service selection/Insurance evaluation

## 📝 Notes

Input: 
- OriginalOffer - financial parameters of offer (OFP)

Output: 
- set of InsuranceVariants(combination of Insurance services)

Find Product (OFP.ProductVariant.Product).
Find ProductInsuranceTypes = Product.ServiceType where ServiceType.ServiceCategory = INSURANCE and exists ServiceType.ServiceTypeFlag(INSURANCE_VARIANT_ALLOWED). 

If allInsuranceCombination = True and number of found combination of insurance for calculation is higher then value of global parameter Insurance calculation combination limit (INS_CALC_COMB_LIMIT) then algorithm ends.

// Find list of eligible InsuranceServices (the first one of each type)
For each ServiceType from ProductInsuranceType (in the ascending order by Product.ProductToServiceType.ServiceType.CalculationOrder):

If allInsuranceCombination = True then try to find all eligible InsuranceService of selected ServiceType from the services assigned to Product (Product.ProductToService.Service), which satisfies rule {DEL PCG-2994} Eligible insurance service. {/DEL} {ADD PCG-2994}Insurance service eligibility check  {/ADD}
else
Try to find the first eligible InsuranceService of selected ServiceType from the services assigned to Product (Product.ProductToService.Service) ordered ascending by Product.ProductToService.SortOrder, which satisfies rule {DEL PCG-2994} Eligible insurance service. {/DEL} {ADD PCG-2994}Insurance service eligibility check  {/ADD}
If InsuranceService.ServiceType.Scope = COMMODITY then InsuranceService must be eligible for at least one financed commodity.
If ServiceType (Product.ServiceType.AdjustmentRule) = MANDATORY (i.e. a Service of ServiceType is mandatory for Product Offer calculation) and no eligible insurance was found then return empty set of InsuranceVariants and algorithm ends. 
If an eligible InsuranceService was found then add it to the list of eligible services (InsuranceService, AdjustmentRule).

Continue with the next ServiceType.

// Find all combinations of eligible services
Prepare InsuranceVariants (list of valid combinations of InsuranceServices) from the list of eligible services with respect to following rules:
- If InsuranceService.AdjustmentRule = MANDATORY then each valid combination must contain the InsuranceService.
- Skip combination which was used for calculation of OriginalOffer.
- Skip combination where services are mutually exclusive.
Return set of InsuranceVariants

Example:
List of eligible services contains following InsuranceServices:
- ServiceA
- ServiceB (mandatory)
- ServiceC
- Service D 
OriginalOffer contains combination ServiceB + ServiceC
ServiceA and ServiceD are exclusive.

Possible combination of services (valid are in bold):
A+B+C+D (invalid: B and D are exclusive)
A+B+C (valid)
A+B+D (invalid: B and D are exclusive)
A+C+D (invalid: B is mandatory)
B+C+D (invalid: B and D are exclusive)
A+B (valid)
A+C (invalid: B is mandatory)
A+D (invalid: B is mandatory)
B+C (invalid: used in OriginalOffer)  
B+D (invalid: B and D are exclusive)
C+D (invalid: B is mandatory)
A (invalid: B is mandatory)
B (valid)
C (invalid: B is mandatory)
D (invalid: B is mandatory)

## 🔗 Connections (3)

- → Dependency: [[{ADD}Insurance service eligibility check]]
- → Dependency: [[{MOD}Eligible Insurance Service]]
- ← Dependency: [[{MOD}Evaluation of Insurance Variants]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Insurance Variants
