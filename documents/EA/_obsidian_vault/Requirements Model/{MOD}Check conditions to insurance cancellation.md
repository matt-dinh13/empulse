---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation"
domain: "Requirements Model"
element_id: 1833580
diagrams: 5
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Check conditions to insurance cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation

## 📝 Notes

This rule  load service parameters from PRC API and contains set of conditions for the contract insurance cancellation enabling.

Input parameter:
Check_COP_Payhol - bool (default false) 
- defines if detailed check for COP period and previous PAYHOL is done, for button visibility it is called with FALSE to keep good performance, for execution it is called with TRUE 
 

	
- Check ContractInsuranceService.Status = ACTIVE or NEW.
	
- If Service Code and Service Version is defined, system gets ServiceDefinition by {ADD}Get Service definition from Services with parameters Service Code and Service Version.
If Service External Id is defined, system gets a ServiceDefinition by {ADD}Get Service definition from New Service Catalogue with parameter Service External Id
If the call returns 400, system returns SERVICE_DEFINITION_NOT_FOUND and check ends.
If other type of error is returned/service is unavailable, system returns SERVICE_DEFINITION_NOT_AVAILABLE and check ends.
	
- System maps received ServiceDefinition  to ServiceParameters by the rule {ADD}Insurance service setting mapping
	
- Contract.Contract Type is CEL or REL or (SAI and Contract.Status = K)
	
- Allowed Insurance Contract Statuses: "New", "Signed", "Active"
	
- {ADD CSI-3080}If the user role has UC11_111_NEW and Insurance Contract Status is in ("Signed", "Active"), the check fails and ends{/DEL}
	
- Evaluate the rule {ADD}Check contract status for contract service cancellation and termination with parameters:
- Contract
- Is Insurance Service = TRUE
- Action = Cancel
	
- User role has assigned UC11_111_Overrule 
OR 
(
  - Service has manual cancellation allowed (ServiceParameters .MANUAL_CANCELLATION_ALLOWED = TRUE) 
  AND
  - for CEL contract type or REL Contract Type with Contract Service.Transaction Supplement Id is not NULL, ServiceParameters.Insurance Cancellation Offset = null or (Insurance Cancellation Offset + Active or Past Insurance Period.Start Date) > current date (cancellation is possible only during defined number of days from start period, if Active Insurance period not found, i.e. StartDate<=current date AND EndDate>=current date, then use the last period in the past, i.e. StartDate<current date)
)
	
- If input parameter Check_COP_Payhol = TRUE and  Contract.Contract Type= CEL and the ServiceParameters.limitCancellationToCOP (moved from InsuranceServiceParam to ServiceParam} = TRUE then
- System checks the contract for active COP/GRPER period using business rule Check contract for active COP/GRPER period. 
If the result is FALSE (contract is out of COP period) then the system returns MSG_SER_CancelActionBlocked (e.g. "Insurance cancellation is not possible - no active cooling-off period or grace period on the contract.") and check ends.
	
- If input parameter Check_COP_Payhol = TRUE and  Contract.Contract Type= CEL then
- System checks the contract for existing Payhol request using rule Check existence of Payhol request for contract with Contract as parameter. If result is TRUE then system returns MSG_SER_CancelActionBlockedByPayhol (e.g. "Insurance cancellation is not possible - some request for Payment holiday or Early repayment or Loan restructuring exists on the contract.") and check ends.
	
- Returns ServiceParameters for next usage

## 🔗 Connections (9)

- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- → Dependency: [[Get Service definition from New Service Catalogue (Requirement 1833433)]]
- → Dependency: [[{ADD}Check contract status for contract service cancellation and termination]]
- → Dependency: [[Check contract for active COP_GRPER period]]
- → Dependency: [[Insurance service setting mapping]]
- → Dependency: [[Check existence of Payhol request for contract]]
- ← Dependency: [[{MOD}11.111 Cancel insurance contract manually]]
- ← Dependency: [[08.452 Cancel contract insurance service (UseCase 1878962)]]
- ← Dependency: [[08.451 Get Contract insurance Cancel preview service (UseCase 1878961)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CSI-1905 Update of the Cancel Insurance method for new Service Catalogue
- Custom: Service cancellation
- Use Case: Contract insurance cancellation
