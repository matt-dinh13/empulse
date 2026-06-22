---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage"
domain: "Requirements Model"
element_id: 1833575
diagrams: 8
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Check conditions to insurance termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage

## 📝 Notes

This rule load service parameters from PRC API and contains set of conditions for the contract insurance termination enabling
Input parameter:

	
- Check_COP - bool (default false) - defines if detailed check for COP is done, for button visibility it is called with FALSE to keep good performance, for execution it is called with TRUE



	
- The rule {ADD}Check TopUp overlap period for contract returns FALSE, else show MSG_CONTRACT_IN_OVERLAP_PERIOD (Request cannot be created in topup overlap period).
	
- Check ContractInsuranceService.Status = ACTIVE.
	
- If Service Code and ServiceVersion is defined, system gets ServiceDefinition by {ADD}Get Service definition from Services with parameters Service Code and Service Version.
If ServiceExternalId is defined, system gets a ServiceDefinition by {ADD}Get Service definition from New Service Catalogue with parameter Service External Id
If the call returns 400, system returns SERVICE_DEFINITION_NOT_FOUND and check ends.
If other type of error is returned/service is unavailable, system returns SERVICE_DEFINITION_NOT_AVAILABLE and check ends.
	
- System maps received ServiceDefinition  to ServiceParameters by the rule {ADD}Insurance service setting mapping
	
- Check Service has manual termination allowed (ServiceParameters.Manual Termination Allowed = True)
	
- Contract.Contract Type is CEL or REL or (SAI and Contract.Status = K)){ADD CLM-5981} or (SAI and Contract.Status <> K and Contract.Has Installments = TRUE and AllowSAITermination = TRUE (feature flag)){/ADD} AND (InsuranceContract.Status = A (Active))
	
- Evaluate the rule {ADD}Check contract status for contract service cancellation and termination with parameters:
- Contract
- Is Insurance Service = TRUE
- Action = Terminate
	
- if Contract.Contract Type = CEL, {ADD TFT-14981} or SAI{/ADD} or REL Contract Type with Contract Service.Transaction Supplement Id is not NULL, then ServiceParameters.Insurance Termination Offset = NULL or (Insurance Termination Offset + Active Insurance Period.Start Date) <= current date (termination is possible only after defined number of days from start period)
	
- if Contract.Contract Type = REL, then check
- ServiceParameters.First Insurance Period Trigger in (CONTRACT_SIGNING_ DATE_AND_OFFSET or CONTRACT_ACTIVATION_DATE_AND_OFFSET or FIRST_TRANSACTION_SIGN_DATE_AND_OFFSET) and First Insurance Period Duration = BILLING_PERIOD. -- REL insurance related to the account
- If ServiceExternalId is defined, ServiceDefinition.First Insurance Period Trigger in (CONTRACT_SIGNING_ DATE_AND_OFFSET or CONTRACT_ACTIVATION_DATE_AND_OFFSET) and First Insurance Period Duration in (LAST_REPAYMENT_DATE_AND_OFFSET,  {ADD CSI-3472} LAST_REPAYMENT_DATE_AND_PROLONGATION, {/ADD} NUMBER_OF_DAYS, CALENDAR_MONTH, CALENDAR_YEAR, TERM_COUNT_WITH_LIMIT, TERM_COUNT) -- REL insurance related to a transaction
	
- If input parameter Check_COP = TRUE and  Contract.Contract Type= {ADD CLM-5981}({/ADD}Contract.Contract Type= CEL {ADD CLM-5981} or SAI){/ADD} and the ServiceParameters.limitTerminationOutOfCOP (new service param) = TRUE then
- System checks the contract for active COP/GRPER period using business rule Check contract for active COP/GRPER period. 
If the result is TRUE (contract is in COP period) then the system returns MSG_SER_TerminationActionBlocked (e.g. "Insurance termination is not possible - cooling-off period or grace period is active on the contract.") and check ends.
	
- Returns ServiceParameters for next usage

## 🔗 Connections (9)

- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- → Dependency: [[Get Service definition from New Service Catalogue (Requirement 1833433)]]
- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[Check contract for active COP_GRPER period]]
- → Dependency: [[{ADD}Check contract status for contract service cancellation and termination]]
- → Dependency: [[Insurance service setting mapping]]
- ← Dependency: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]
- ← Dependency: [[08.454 Terminate contract insurance service (UseCase 1878981)]]
- ← Dependency: [[08.453 Get Contract insurance Terminate preview service (UseCase 1878969)]]

## 📊 Appears In (8 diagrams)

- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Custom: CSI-1904 Update of the Terminate insurance method for new Service Catalogue
- Custom: Service termination
- Use Case: CLM-5981 Termination of the SAI with installments
- Use Case: Contract insurance termination
