---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products"
domain: "Requirements Model"
element_id: 1876165
diagrams: 6
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Create insurance contracts for insurance services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2620 (CLM-1155) New insurance types for REL products

## 📝 Notes

Input: 

	
- Contract


Pre-condition: Installment schedule has been generated

System takes all insurance services adjusted in the chosen offer (Offer Insurance Service) of the contract and for each performs following steps:
 

	
- System checks that insurance contract does not exist for the insurance service (Insurance Service.Insurance Contract Code is not set).
- If it does exist, current insurance service is skipped and scenario continues with step 9.
	
- System creates a new insurance contract (Insurance Contract) using UC 11.010 Create insurance contract with parameters set as follows:
- Loan Contract Code is set to the code of the loan contract (Contract.Code)
- Insurance Type Code is set to the code of the service type (Service.Type)
- CUID  is set to the CUID of the client (Contract->Deal->Client.CUID)
- Insurance Program Code and Version is set to the code and version of the insurance program which the insurance service adjusted in the offer is based on (Offer Insurance Service.Insurance Program Code, Insurance Program Version).
- {ADD CSI-608}InsuranceProgramExternalId = 'Insurance Program Code'&'-'&'Insurance Program Version' -- e.g. INS_PPI-3{/ADD}
- Insurance Service Code and Version is set to the values of the insurance service (Offer Insurance Service->Service)
- In case that insurance service is of the type having COMMODITY scope (Service Type.Scope), Commodity External Id is taken from Contract -> Contract Service and passed as CommodityExternalId parameter
- all insurance custom data for the insurance service (Offer Insurance Service.Insurance Custom Data) are passed as parameter.
	
- System links created insurance contract to the insurance service (Insurance Service.Insurance Contract Code).
	
- If Contract.Product Type = REL and Insurance Service.First Insurance Period Trigger in (CONTRACT_SIGNING_ DATE_AND_OFFSET or CONTRACT_ACTIVATION_DATE_AND_OFFSET or FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET) and First Insurance Period Duration = BILLING_PERIOD then scenario continues with next Offer Insurance Service to processing --- these insurance types are not processed; for the Insurance charged by AM, see UC 11.772 Activate insurance on Contract event notification
	
- System determines insurance period according to business rule Determine first insurance period with following parameters:
- insurance service = insurance service (exact version) which is being processed
- term = term of the chosen offer
- date sent to approval = Contract.Sent To Approval
- date signed = current date
- transaction signed = current date
- EoM date = NULL
- date activated = NULL
- last repayment date is set to the latest due date of the offer's installment schedule (last regular installment)
- estimated duration if Offer Insurance Service.Estimated First Period Start and Offer Insurance Service.Estimated First Period End are not NULL then
-- it is set to the duration of the pre calculated first period in days for the insurance service being processed (estimated duration = period end - period start + 1) where period start and end are Offer Insurance Service.Estimated First Period Start and Offer Insurance Service.Estimated First Period End respectively)
If the business rule determining the first insurance period finishes with an error, insurance period is not created for the insurance contract (insurance contract remains stored nevertheless) and use case continues with step 9.
	
- System calculates sum insured for the insurance according to the tariffs assigned to the Insurance Service:
- Algorithm: Find tariff items by usage (with parameters Contract and Usage_type="SI")
- for each Tariff Item found, system calls Algorithm: Calculate tariff item amount (with parameters Contract and Tariff Items found in previous step)
- sum insured is calculated as a sum of Tariff Items values calculated in previous step
	
- System calculates insurance premium for the insurance from tariff items calculated for the chosen offer (Contract -> Offer Financial Parameters -> OFP Tariff Item). All items linked to the current insurance service having Tariff Item->Tariff Item Type.Usage = 'Service' are summed and the result is used as an insurance premium.
	
- If Contract.OfferFinancialParameters.InitialTransactionType = 'NDF' and Contract.Contract_type <> 'SAI'   then system saves calculated sum insured and insurance premium into Insurance Contract (EstimatedSumInsured, EstimatedInsurancePremium) otherwise system creates a new insurance period for the insurance contract (Insurance Period) using UC 11.020 Add insurance period with insurance period start, end, sum insured and insurance premium as parameters.
	
- System continues with the step 1 for next unprocessed insurance service. If all insurance services adjusted in the chosen offer have been processed, use case ends.

## 🔗 Connections (6)

- → Dependency: [[{MOD}11.010 Create insurance contract]]
- → Dependency: [[REQ #1 - New REL insurance types_ Automatic start and processing]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[11.020 Add insurance period (UseCase 1879775)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-2620 (CLM-1155) New insurance types for REL products.docx
- Custom: CSI-548 INSR - integrate BSL to module API
- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance Contract Management
- Use Case: Prepare documentation to sign
