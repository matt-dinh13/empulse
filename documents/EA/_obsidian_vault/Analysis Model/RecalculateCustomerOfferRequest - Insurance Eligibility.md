---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1825186
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 RecalculateCustomerOfferRequest - Insurance Eligibility

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

// Insurance service eligibility
// returned resultCode and description is in bracket

Input:
- OrigResponse
- Product
- Service

OFP =  OrigResponse.Offer Financial Parameter
Commodities = set of OrigResponse.ProductOfferCalculationRequest.ProductOfferRequestCommodity
Calculated SumInsured is summarized by Service.InsuranceProgram in set of pairs (Service.InsuranceProgram, SumInsuredProgram)
 

	
- InsuranceProgram assigned to Service is valid , i.e. current date is in InsuranceProgram.<ValidFrom, ValidTo>  
[INSSERV_PROGRAM, ServiceChoice.service.code]



	
- If maximal loan amount is set for the insurance service (Service.InsuranceService.MaxLoanAmount) then the OFP.NetCreditAmount Loan amount must be lower or equal to this maximal value.
[INSSERV_MAXLOANAMOUNT, Service.Code]
	
- If Service.ServiceType.Scope = 'Commodity' then check eligibility of each commodity from the set of Commodities:
a) Check CommodityType by the rule Eligible commodity type with (Service, CommodityType) as parameters. If commodity does not pass the rule then continue with the next commodity.
b) Calculate SumInsured for commodity as follows:
- find Tariff Item (TI) where TI.TariffItemType.Usage = SI in Service.Tariff 
- if found and TI.percentageBasedOn = GP (goods price) then calculate SumInsured using TI parameters and commodity.Price
Add SumInsured into set of pairs (Service.InsuranceProgram, SumInsuredProgram) and check current value of SumInsuredProgram by the rule Maximum sum insured - contract with (Service, SumInsuredProgram) as parameters. 
If SumInsured cannot be calculated or the checking is not successful then continue with the next commodity.
Add commodity to the list of eligible commodities.
Continue with the next commodity.
If the list of eligible commodities is empty then raise error
[INSSERV_COMMODITY, Service.Code]



	
- If Service.ServiceType.Scope <> 'Commodity' then: 
Calculate SumInsured as follows:
- find Tariff Item (TI) where TI.TariffItemType.Usage = SI in Service.Tariff 
- if found then use TI parameters for calculation of SumInsured; if a base is necessary for calculation the use OFP for evaluation
Add SumInsured into set of pairs (Service.InsuranceProgram, SumInsuredProgram) and check current value of SumInsuredProgram by the rule Maximum sum insured - contract with (Service, SumInsuredProgram) as parameters. 
If SumInsured cannot be calculated or does not pass the checking then raise error 
[INSSERV_MAXSUMINSURED, Service.Code].

## 🔗 Connections (1)

- ← Dependency: [[{MOD}RecalculateCustomerOfferRequest - validation rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Calculate/Recalculate
