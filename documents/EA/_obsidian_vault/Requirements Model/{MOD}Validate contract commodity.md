---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1836942
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Validate contract commodity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

This rule validates the commodity related to the contract (against the defined validation rules) according the input parameters:

	
- commodityID
	
- contract


	
- type -- validation event type
	
- validationSkippingAllowed (FALSE as default value)


Output:

	
- result (boolean)
	
- error code, description
	
- validationSkipped (boolean)



	
- If validationSkippingAllowed = TRUE, system calls Getting Commodity data rule with commodityID as parameter.
\\checking REST response
If Commodity.validationSkippable =True and .validationSkipped = True, then system returns:
- result = TRUE
- validationSkipped = TRUE
Scenario ends.
\\Commodity validation is skippable and the commodity has "validation skipped" set
	
- System calls REST API validateCommodities  with following input parameters:
- commodityCode = commodityID
- validationParameters.eventType = type
- validationParameters.insuranceServiceCode =  code of the insurance service assigned to Commodity (Contract Service.Commodity ID=commodityID]
- validationParameters.productCode = code of the product, that the Contract[Contract 2 Commodity.Commodity ID=commodityID] is based on
- financingPackageCode = code of the applicable financing package from the product, that the contract is based on (i.e. Contract_2_Commodity[.Commodity_ID=commodityID]->Contract->Financial Parameter.Financing Package)
	
- System returns:
- result = TRUE if the result of the commodity validation = SUCCESS or ALREADY_VALIDATED, else returns the respective error
- validationSkipped = FALSE

## 🔗 Connections (3)

- → Dependency: [[Getting Commodity data rule]]
- ← Dependency: [[01.331 Cancel signed contract with invalid commodity (UseCase 1850492)]]
- ← Dependency: [[01.271 Register contract remotely]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
