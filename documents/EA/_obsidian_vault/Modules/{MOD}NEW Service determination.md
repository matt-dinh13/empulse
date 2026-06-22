---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1835622
diagrams: 3
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {MOD}NEW Service determination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

/replace Sevice determination and Insurance determination

This algorithm determines particular service for a product. Note that this algorithm does not calculates any amounts (that is done in particular calculation algorithm).

Inputs:

	
- Set of loan preferences
	
- Application form, if already exists (TA)
	
- Product
	
- Salesroom
	
- ListOfRequiredServices (optional)


Outputs:

	
- collection of services selected for the inputted product
	
- decision if product has to be skipped (true/false) because the product does not provide services which satisfy required loan preferences


Explanation:
ServiceType.Preference = preferences for each service type (see Service Preference) from the Set of loan preferences

Steps:

System returns services which satisfy all following collections: 

If ListOfRequiredServices is defined: 
// All required services and also services mandatory on Product must be included into the collection of services
System selects services assigned to the Product (AvailableServices = Product->ProductToService->Service). 
Service is valid at the date of calculation, i.e. current date is in interval Service.(ValidFrom, ValidTo), Service.VersionStatus = 'Active'
For each RequiredService from the ListOfRequiredServices check if the RequiredService
a) is in AvailableServices,
b) if Service.Category = INSURANCE then satisfies validation rule Insurance service eligibility check 
c) Service passes rule Service Exclusivity Check with (Service, OtherServices) as parameters where OtherServices is set of services already evaluated as eligible for Product.
d) is available on salesroom according to the rule Check Service Availability on Salesroom are taken in account.
e) Service passes rule Service qualification criteria check with input parameters (Service, QualificationCriteria(code, value))
f) Service passes rule Loan amount eligibility check with input parameters ()
If all validations succeed the service is attached to collection of eligible services.
Otherwise the product is skipped and algorithm ends.
Continue with the next RequiredService.
 

	
- System selects service types assigned to the product (set of ServiceTypes = Product->ProductToServiceType->ServiceType). 
Obligation for each ServiceType is defined by ServiceType->ProductToServiceType.AdjustmentRule.
Possible combinations of Obligation and particular service types are described in the next step.
	
- For each ServiceType from ServiceTypes (in the ascending order by ServiceType.CalculationOrder ) system tries to find particular service (in the given order of ServiceType.Preference)
- If ServiceType.Category = INSURANCE and ServiceType.Scope = COMMODITY then select service for each commodity separately, for commodity with InsureCommodity = true
- If (ListOfRequiredServices is defined and obligation <> 'MANDATORY') OR 
a service of particular ServiceType and ServiceType.Category = INSURANCE has been already included into collection of eligible services in previous steps then continue with the next ServiceType.
- If ServiceType.Preference = 'REFUSED'
    -- If Obligation = 'OPT_IN' then no insurance has to be selected.
    -- If Obligation = 'OPT_OUT' then no insurance  has to be selected.
    -- If Obligation = 'MANDATORY' then no service has to be selected, the product is skipped and this whole algorithm ends.
- If client's ServiceType.Preference = 'REQUIRED'
    -- If Obligation = 'OPT_IN', system selects the first eligible service from ServiceType (see below). If no eligible service was found, the product is skipped and this whole algorithm ends.
    -- If Obligation = 'OPT_OUT', system selects the first eligible service from ServiceType (see below). If no eligible service was found, the product is skipped and this whole algorithm ends.
    -- If Obligation = 'MANDATORY', system selects the first eligible from ServiceType (see below). If no eligible service was found, the product is skipped and this whole algorithm ends.
- If client's ServiceType.Preference = 'NO_PREFERENCE'
    -- If Obligation = 'OPT_IN', no service has to be selected.
    -- If Obligation = 'OPT_OUT', system selects the first eligible service from ServiceType (see below). If no eligible service was found, no service is selected.
    -- If Obligation = 'MANDATORY', system selects the first eligible service from ServiceType (see below). If no eligible insurance was found, the product is skipped and this whole algorithm ends.
- If an eligible insurance (Service.Category = INSURANCE) has to be selected then system tries to find the first eligible insurance service of selected ServiceType from the services assigned to Product (Product->ProductToService->Service) ordered ascending by Product->ProductToService.SortOrder, (if globalParameter.InsuranceOnOfferDurationLimit (PCG_LIMIT_OFFER_INS_BY_TERMS) = true and Service.Category = INSURANCE and Service.FirstPeriodDuration in (TERM_COUNT, TERM_COUNT_WITH_LIMIT) then descending sort order is taken from Product.Service.InsuranceService.FirstPeriodDurationOffset) and rest of insurance services are ordered by productToService.SortOorder which satisfies validation rule Insurance service eligibility check. 
If validation succeeded then:
- Check if the service is available on salesroom according to the rule Check Service Availability on Salesroom.
- If available then the service is attached to collection of eligible services.
- If NOT available and Obligation = 'MANDATORY' then the product is skipped and this whole algorithm ends. 
- If no service is selected and Obligation = MANDATORY then the product is skipped and this whole algorithm ends.
Continue with the next ServiceType.


Valid for all options:

	
- If no services was selected in the previous steps, this algorithm ends and returns an empty set.
	
- If Service.ServiceType.Scope = 'Commodity' for any of the selected insurance service, then system creates separate instance of this insurance service for each commodity marked with InsureCommodity = true that passed all checking during insurance service eligibility checking.
	
- Otherwise (i.e. ServiceTypej.Scope <> 'Commodity'), system creates only one instance of Service for each insurance.
	
- System returns a collection of services selected in the previous steps.

## 🔗 Connections (6)

- → Dependency: [[Check Service Availability on Salesroom]]
- → Dependency: [[{ADD}Insurance service eligibility check]]
- → Dependency: [[{MOD}Loan amount eligibility check]]
- → Dependency: [[Service Exclusivity Check]]
- → Dependency: [[Service qualification criteria check]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of Insurance Variants
- Custom: Product and Service selection
