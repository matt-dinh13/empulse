---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Insurance/Business Rules"
domain: "Analysis Model"
element_id: 1728258
diagrams: 4
connections: 12
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Eligible Insurance Service

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Business Rules

## 📝 Notes

This algorithm checks eligibility of insurance service of selected type.

Inputs:

	
- Insurance service
	
- Application form (TA) or Product  for which the eligible service is checked
	
- Loan preferences (LP), i.e. parameters for offer calculation


Outputs:

	
- Eligibility of service (true/false)


If TA is defined then 
- Product = TA.Offer.Product 
- Commodities = TA.Commodities
else 
- Product = .Product
- Commodities = LP.Commodities

Insurance eligibility is always checked to reference date = date of generation of the offer (e.g. age of client), which is currently generated or chosen (when applied after offer generation), using parameters of Insurance Service and Insurance Program which are referenced from the offer, and data from current AppForm.
The only exception is checking of service exclusivity, where setting is not versioned and for validation is always used current setting.
 

	
- InsuranceService and assigned InsuranceProgram must be valid on reference date, i.e. 
- reference date is in interval InsuranceService->Service.(ValidFrom, ValidTo)
- version of the insuranceService is active, i.e. InsuranceService->Service.VersionStatus = 'Active',
- reference date is in interval InsuranceService->InsuranceProgram.(ValidFrom, ValidTo),
- version of the insuranceProgram is active, i.e. InsuranceService->InsuranceProgram.VersionStatus = 'Active'.
	
- If InsuranceService.ServiceType.Scope = 'Commodity' AND (combination of Product.ProductProfile.ProductType + Product.ProductProfile.InitialTransactionType <> (CEL/POS OR REL/POS OR SAI/NDF) OR InsuranceService.InsuranceProgram.SubjectType <> 'GOODS') then InsuranceService is skipped.
	
- If TA.ClientBirthDate is defined then check service by the rule Minimum client's age with (Service, TA.clientBirthDate) as parameters.
	
- If TA.ClientBirthDate and TA.ClientGender are defined then check service by the rule Maximum client's age with (service, TA.ClientBirthDate, TA.ClientGender,"first") as parameters.
	
- If TA.EmploymentProfession is defined then check service by the rule Eligible profession with (Service, TA.EmploymentProfession) as parameters.
	
- If maximal loan amount is set for the insurance service (InsuranceService.MaxLoanAmount) and Product.ProductProfile.ProductType <> SAI the Loan amount must be lower or equal to this maximal value.
Loan amount is calculated according to algorithm Simple principal calculation.
	
- If Service.ServiceType.Scope = 'Commodity' then:
a) Check each commodity from the set of Commodities by the rule Eligible commodity type with (Service, Commodity{ADD PCG-2245}, Price{/ADD}) as parameters. 
b) Check each eligible commodity from previous checking by the rule Maximum sum insured - contract with (Service, SumInsured) as parameters. 
SumInsured is calculated by algorithm Sum Insured with parameteres (Price = commodity.Price).
c) Check each eligible commodity from previous checking by the rule Maximum sum insured - client with (Service, SumInsured) as parameters. Take the commodities ordered by commodity price in descending order.
SumInsured is calculated by algorithm Sum Insured with parameteres (Price = SummaryPrice, CUID =TA.CUID).
SummmaryPrice is defined as price of the commodity + sum of prices of all commodities that were already evaluated as eligible for this rule before.
The check is evaluated as met, if at least one commodity satisfies all the rules a) + b) + c).
	
- If Service.ServiceType.Scope <> 'Commodity' then: 
a) Check by the rule Maximum sum insured - contract with (Service, SumInsured) as parameters. 
b) Check by the rule Maximum sum insured - client with (Service, SumInsured) as parameters. 
SumInsured is calculated by algorithm Sum Insured with parameteres (Price = LP.TotalGoodsPrice, CUID =TA.CUID).
	
- Check by the rule Service Exclusivity Check with (Service, OtherServices) as parameters where OtherServices is set of services already evaluated as eligible for Product  or TA.


If a criterion is not met, the remaining ones do not have to be evaluated.

## 🔗 Connections (12)

- → Dependency: [[Sum Insured calculation]]
- → Dependency: [[Service Exclusivity Check]]
- → Dependency: [[{MOD}Simple principal calculation]]
- → Dependency: [[Eligible profession]]
- → Dependency: [[Maximum client's age]]
- → Dependency: [[Maximum sum insured - client]]
- → Dependency: [[Maximum sum insured - contract]]
- → Dependency: [[Minimum client's age]]
- → Dependency: [[Eligible CommodityType]]
- ← Dependency: [[{DEL}Insurance determination]]
- ← Dependency: [[{MOD}Prepare list of derived Insurance Variants]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (4 diagrams)

- Custom: Eligible Insurance Service
- Custom: Evaluation of Insurance Variants
- Custom: Product and Service selection
- Use Case: Fill in application
