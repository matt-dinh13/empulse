---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833403
diagrams: 6
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Check conditions to contract service termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule load service parameters from PRC API and contains set of conditions for the contract insurance termination enabling

Input parameter:
Check_COP - bool (default false) 
- defines if detailed check for COP is done, for button visibility it is called with FALSE to keep good performance, for execution it is called with TRUE 
 

	
- The rule Check TopUp overlap period for contract returns FALSE, else show MSG_CONTRACT_IN_OVERLAP_PERIOD (Request cannot be created in topup overlap period).
	
- Check ContractService.Status = ACTIVE.
	
- If Service Code and ServiceVersion is defined, system gets ServiceDefinition by {ADD}Get Service definition from Services with parameters Service Code and Service Version.
If ServiceExternalId is defined, system gets a ServiceDefinition by {ADD}Get Service definition from New Service Catalogue with parameter Service External Id
If the call returns 400, system returns SERVICE_DEFINITION_NOT_FOUND and check ends.
If other type of error is returned/service is unavailable, system returns SERVICE_DEFINITION_NOT_AVAILABLE and check ends.
	
- System maps received ServiceDefinition  to ServiceParameters by the rule {ADD}Insurance service setting mapping
	
- Check Service has manual termination allowed (ServiceParameters.Manual Termination Allowed = True)
	
- Contract.Contract Type is CEL or REL or (SAI and Contract.Status = K){ADD CLM-6072}or (SAI and Contract.Status <> K and Contract.Has Installments = TRUE and AllowSAICancellation = TRUE (feature flag)){/ADD}
	
- Evaluate the rule {ADD}Check contract status for contract service cancellation and termination with parameters:
- Contract
- Is Insurance Service = FALSE
- Action = Terminate
	
- If input parameter Check_COP = TRUE and  Contract.Contract Type= CEL and the ServiceParameters.limitTerminationOutOfCOP (new service param) = TRUE then
- System checks the contract for active COP/GRPER period using business rule Check contract for active COP/GRPER period. 
If the result is TRUE (contract is in COP period) then the system returns MSG_SER_TerminationActionBlocked (e.g. "Insurance termination is not possible - cooling-off period or grace period is active on the contract.") and check ends.
	
- Returns ServiceParameters for next usage

## 🔗 Connections (3)

- → Dependency: [[{ADD}Check contract status for contract service cancellation and termination]]
- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[Check contract for active COP_GRPER period]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: Service termination
- Use Case: CLM-6072 Cancel/Terminate Service update for SAI
- Use Case: Service - Contract Service management via API
