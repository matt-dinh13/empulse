---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833423
diagrams: 6
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Check conditions to contract service cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule load service parameters from PRC API and contains set of conditions for the contract insurance cancellation enabling.

Input parameter:
Check_COP_Payhol - bool (default false) 
- defines if detailed check for COP period and previous PAYHOL is done, for button visibility it is called with FALSE to keep good performance, for execution it is called with TRUE 
 

	
- Check ContractService.Status = ACTIVE or NEW.
	
- If Service Code and Service Version is defined, system gets ServiceDefinition by {ADD}Get Service definition from Services with parameters Service Code and Service Version.
If Service External Id is defined, system gets a ServiceDefinition by {ADD}Get Service definition from New Service Catalogue with parameter Service External Id
If the call returns 400, system returns SERVICE_DEFINITION_NOT_FOUND and check ends.
If other type of error is returned/service is unavailable, system returns SERVICE_DEFINITION_NOT_AVAILABLE and check ends.
	
- System maps received ServiceDefinition  to ServiceParameters by the rule {ADD}Insurance service setting mapping
	
- Contract.Contract Type is CEL or REL or (SAI and Contract.Status = K){ADD CLM-6072}or (SAI and Contract.Status <> K and Contract.Has Installments = TRUE and AllowSAICancellation = TRUE (feature flag)){/ADD}
	
- Evaluate the rule {ADD}Check contract status for contract service cancellation and termination with parameters:
- Contract
- Is Insurance Service = FALSE
- Action = Cancel
	
- Service has manual cancellation allowed (ServiceParameters .MANUAL_CANCELLATION_ALLOWED = TRUE)
	
- If input parameter Check_COP_Payhol = TRUE and  Contract.Contract Type= CEL and the ServiceParameters.limitCancellationToCOP (moved from InsuranceServiceParam to ServiceParam) = TRUE then
- System checks the contract for active COP/GRPER period using business rule Check contract for active COP/GRPER period. 
If the result is FALSE (contract is out of COP period) then system returns MSG_SER_CancelActionBlocked (e.g. "Cancellation is not possible - no active cooling-off period or grace period on the contract.") and check ends.
	
- If input parameter Check_COP_Payhol = TRUE and  Contract.Contract Type= CEL then
- System checks the contract for existing Payhol request using rule Check existence of Payhol request for contract with Contract as parameter. If result is TRUE then system returns MSG_SER_CancelActionBlockedByPayhol (e.g. "Cancellation is not possible - Payment holiday period or created request exists on the contract.") and check ends.
	
- Returns ServiceParameters for next usage

## 🔗 Connections (3)

- → Dependency: [[{ADD}Check contract status for contract service cancellation and termination]]
- → Dependency: [[Check existence of Payhol request for contract]]
- → Dependency: [[Check contract for active COP_GRPER period]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: Service cancellation
- Use Case: CLM-6072 Cancel/Terminate Service update for SAI
- Use Case: Service - Contract Service management via API
