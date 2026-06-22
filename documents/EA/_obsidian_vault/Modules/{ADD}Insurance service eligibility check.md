---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1774323
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Insurance service eligibility check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

{ADD PCG-2994/}
This algorithm checks eligibility of insurance service of selected type.
// replaces the Eligible Insurance Service  for product calculator use

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
 

	
- InsuranceService must be valid on current date, i.e. 
- current date is in interval InsuranceService->Service.(ValidFrom, ValidTo)
- version of the insuranceService is active, i.e. InsuranceService->Service.VersionStatus = 'Active',
	
- If InsuranceService.ServiceType.Scope = 'Commodity' AND (combination of Product.ProductProfile.ProductType + Product.ProductProfile.InitialTransactionType <> (CEL/POS OR REL/POS OR SAI/NDF) OR InsuranceService.InsuranceProgram.SubjectType <> 'GOODS') then InsuranceService is skipped.
	
- If cuid is known then system gets data about client insurances from external module (INSR) by rest service call GET request: /rest/v1.0/statistics/customer/ with following parameters:
- customerId = cuid
from response: clientSumInsured = totalSumInsured.value
	
- System gets insurance eligibility from external module (INSR) by rest service call POST: /rest/v1.0/Insurance programs/Data eligibility check/ with following parameters:
clientData - data from TA
  birthDate = TA.ClientBirthDate
  gender = TA.ClientGender
  profession = TA.EmploymentProfession
  contractSumInsured = SumInsured is calculated by algorithm Sum Insured with parameteres (Price = LP.TotalGoodsPrice)
  clientSumInsured = clientSumInsured 
commoditiesData - data from Commodities
ignoreMissingValues = true
InsurancePrograms = InsuranceService.InsuranceProgramCode
	
- Insurance service is checked by the rule Service Exclusivity Check with (Service, OtherServices) as parameters where OtherServices is set of services already evaluated as eligible for Product  or TA.


If a criterion is not met, the remaining ones do not have to be evaluated.

## 🔗 Connections (3)

- → Dependency: [[Service Exclusivity Check]]
- ← Dependency: [[{MOD}Prepare list of derived Insurance Variants]]
- ← Dependency: [[{MOD}NEW Service determination]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of Insurance Variants
