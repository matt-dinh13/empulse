---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Insurance/Business Rules"
domain: "Analysis Model"
element_id: 1774322
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Insurance determination

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Business Rules

## 📝 Notes

{DEL PCG-1816/}
//Replaced by NEW Service determination

This algorithm determines particular insurances for a product. Note that this algorithm does not calculates any amounts (that is done in particular calculation algorithm).

Inputs:

	
- Set of loan preferences
	
- Application form, if already exists (TA)
	
- Product


	
- Salesroom


	
- ListOfRequiredServices (optional)


Outputs:

	
- collection of insurances selected for the inputted product


	
- decision if product has to be skipped (true/false) because the product does not provide services which satisfy required loan preferences


Explanation:
ServiceType.Preference = preferences for each insurance service type (see Insurance Preference) from the Set of loan preferences

Steps:

System returns services which satisfy all following collections: 

If ListOfRequiredServices is defined: 
// All required services and also services mandatory on Product must be included into the collection of insurance services
System selects insurance services assigned to the Product
(AvailableInsuranceServices = Product->ProductToService->Service where Service.ServiceType->ServiceCategory = 'Insurance'). 
For each RequiredService from the ListOfRequiredServices check if the RequiredService
a) is in AvailableInsuranceServices,
b) satisfies validation rule Eligible insurance service. 
c) {ADD PCG-822_16} is available on salesroom according to the rule Check Service Availability on Salesroom are taken in account.
{ADD PCG-1767}d) Service passes rule {ADD}Service qualification criteria check with imput parameters (Service, QualificationCriteria(code, value)).{/ADD}
If all validations succeed the service is attached to collection of eligible insurance services.
Otherwise the product is skipped and algorithm ends.
Continue with the next RequiredService.
 

	
- System selects insurance service types assigned to the product
(set of InsuranceServiceTypes = Product->ProductToServiceType->ServiceType where ServiceType->ServiceCategory = 'Insurance'). 
Obligation for each InsuranceServiceType is defined by ServiceType->ProductToServiceType.AdjustmentRule.
Possible combinations of Obligation and particular service types are described in the next step.
	
- For each ServiceType from InsuranceServiceTypes (in the ascending order by ServiceType.CalculationOrder ) system tries to find particular insurance service (in the given order of ServiceType.Preference):
- If (ListOfRequiredServices is defined and obligation <> 'MANDATORY') OR 
a service of particular ServiceType has been already included into collection of eligible insurance services in previous steps then continue with the next ServiceType.
- If ServiceType.Preference = 'REFUSED'
    -- If Obligation = 'OPT_IN' then no insurance has to be selected.
    -- If Obligation = 'OPT_OUT' then no insurance  has to be selected.
    -- If Obligation = 'MANDATORY' then no insurance  has to be selected, the product is skipped and this whole algorithm ends.
- If client's ServiceType.Preference = 'REQUIRED'
    -- If Obligation = 'OPT_IN', system selects the first eligible insurance from InsuranceServiceType (see below). If no eligible insurance was found, the product is skipped and this whole algorithm ends.
    -- If Obligation = 'OPT_OUT', system selects the first eligible insurance from InsuranceServiceType (see below). If no eligible insurance was found, the product is skipped and this whole algorithm ends.
    -- If Obligation = 'MANDATORY', system selects the first eligible insurance from InsuranceServiceType (see below). If no eligible insurance was found, the product is skipped and this whole algorithm ends.
- If client's ServiceType.Preference = 'NO_PREFERENCE'
    -- If Obligation = 'OPT_IN', no insurance has to be selected.
    -- If Obligation = 'OPT_OUT', system selects the first eligible insurance from InsuranceServiceType (see below). If no eligible insurance was found, no insurance is selected.
    -- If Obligation = 'MANDATORY', system selects the first eligible insurance from InsuranceServiceType (see below). If no eligible insurance was found, the product is skipped and this whole algorithm ends.
- If an eligible insurance has to be selected then system tries to find the first eligible insurance service of selected ServiceType from the services assigned to Product (Product->ProductToService->Service) ordered ascending by Product->ProductToService.SortOrder, which satisfies validation rule Eligible insurance service. 
If validation succeeded then:
- Check if the insurance service is available on salesroom according to the rule Check Service Availability on Salesroom.
- If available then the service is attached to collection of eligible insurance services.
- If NOT available and Obligation = 'MANDATORY' then the product is skipped and this whole algorithm ends. 
Continue with the next ServiceType.


Valid for all options:

	
- If no insurance services was selected in the previous steps, this algorithm ends and returns an empty set.
	
- If Service.ServiceType.Scope = 'Commodity' for any of the selected insurance service, then system creates separate instance of this insurance service for each commodity that passed all checking during insurance service eligibility checking.
Otherwise (i.e. ServiceTypej.Scope <> 'Commodity'), system creates only one instance of Service for each insurance.
	
- System returns a collection of insurance services selected in the previous steps.

## 🔗 Connections (5)

- → Dependency: [[Service qualification criteria check]]
- → Dependency: [[Check Service Availability on Salesroom]]
- → Dependency: [[Service fees amount definition]]
- → Dependency: [[{MOD}Eligible Insurance Service]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Eligible Insurance Service
- Custom: Evaluation of Insurance Variants
