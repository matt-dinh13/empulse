---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules"
domain: "Analysis Model"
element_id: 1817780
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Find internal refinanced contracts and get their consolidation amounts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules

## 📝 Notes

This rule describes, how system finds the internal refinanced contracts in relation with the processed application and gets their consolidation amounts.

Input:
- ConsolidatingContract = code of a consolidating contract

Output:
- RefinancedContractConsolidationAmount [1..n] = consolidation amount of respective refinanced contract


Steps:

	
- System takes the ConsolidatingContract from the input and finds all internal contracts to be refinanced by such consolidating contract (i.e. Contract[.Code=ConsolidatingContract]->Temporary_Application->TempAppl_Refinanced_Contract[.IsInternal=TRUE]).
	
- System takes the found refinanced contracts and gets their detailed data according to the algorithm Get detailed data about contract with following parameters on the input:
   - ContractNumber [1..n] = code of respective refinanced contract(s) found in previous step (i.e. TempAppl_Refinanced_Contract.Contract_Number)
If no or incomplete data (i.e. details for any contract from the input are missing) are returned, then this step fails (MSG_GetConsolidationDataFailure) and algorithm ends.
Otherwise the returned ContractDetail data are used within the next step.
	
- System takes the individual refinanced contracts and performs a validation of their statuses, which must be 'Active' or 'Paid-off' (i.e. ContractDetail.contractStatus is in ('A', 'L')).
If the validation failed for at least one of the refinanced contracts, then this whole step fails (MSG_InvalidStatusOfConsolidatedContract) as well and algorithm ends.
	
- System takes the individual refinanced contracts and gets their actual consolidation amounts according to the algorithm Get consolidation amounts for internal refinanced contracts with following parameters on the input:
   - RefinancedContract [1..n] = ContractDetail retrieved in step 2
   - ConsolidationService = consolidation service adjusted on the offer selected for the consolidating contract (i.e. Contract[.Code=ConsolidatingContract]->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service->Service[Service Type.Code='CONS'])

If the algorithm failed, then this whole step fails with respective error message as well and algorithm ends.
	
- System takes the individual consolidation amounts retrieved in previous step and returns them to the calling object. Algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Get detailed data about contract]]
- → Dependency: [[Get consolidation amounts for internal refinanced contracts]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
