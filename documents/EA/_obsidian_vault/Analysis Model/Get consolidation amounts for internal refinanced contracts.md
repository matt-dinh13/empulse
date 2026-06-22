---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules"
domain: "Analysis Model"
element_id: 1817782
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get consolidation amounts for internal refinanced contracts

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules

## 📝 Notes

This rule describes, how system gets the consolidation amounts for internal refinanced contracts.

Input:
- RefinancedContract [1..n] = code of the respective refinanced contract
- ConsolidationService = consolidation service defining the applicable parameters for contract refinancing 

Output:
- RefinancedContractConsolidationAmount [1..n] = consolidation amount of respective refinanced contract

Steps:

	
- System takes each RefinancedContract from the input and gets its actual consolidation amount by calling the InstallmentServiceWS.ServiceSimulationRequest with following input parameters (serviceParam.*):
   - contractNumber = RefinancedContract.Code
   - requestDate = Temporary_Application -> TempAppl_Refinanced_Contract[.contractNumber = contractNumber].FerDueDate
   - If requestDate = Null then requestDate = actual date
   - serviceCode = ConsolidationService.Code
   - serviceVersion = ConsolidationService.Version_Number

If calling the service fails due to any reason or an error response is returned (i.e. ServiceSimulationResponse.payment.resultCode <> 'SUCCESS'), then the whole algorithm fails (MSG_GetConsolidationDataFailure) as well.
Otherwise system takes the individual consolidation amounts from the received response (i.e. ServiceSimulationResponse.itemsToPay.totalAmount) and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[Validate parameters for contract refinancing]]
- ← Dependency: [[Find internal refinanced contracts and get their consolidation amounts]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Contract signing
- Use Case: Prepare documentation to sign
