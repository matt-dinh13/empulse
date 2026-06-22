---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules"
domain: "Analysis Model"
element_id: 1615947
diagrams: 3
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Validate parameters for contract refinancing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules

## 📝 Notes

This rule describes, how system validates the parameters for requested contract refinancing in relation with the processed application.

Input:
- CUID = client's unique identifier
- RefinancedContract [1..n]
   - ContractNumber = code of a contract
   - IsInternalFlag = indication (boolean), whether the respective contract is internal (i.e. has been entered into within HCI company) or not
   - RefinancedAmount = amount needed for refinancing of respective contract
- CustomerOfferCode = code of an offer selected by the customer for refinancing purposes
- ConsolidationService = consolidation service defining the applicable parameters for contract refinancing


Steps:

	
- System takes each RefinancedContract from the input and checks, whether the corresponding contract has been entered into internally (i.e. RefinancedContract.IsInternalFlag = TRUE). //External refinancing via API is currently not supported.
If such check failed for at least one of the refinanced contracts, then this whole step fails (MSG_InvalidRefinancedContracts) as well and algorithm ends.
	
- System takes the CUID from the input and gets all customer's contracts eligible for possible refinancing according to the algorithm Get customer contracts with following parameters on the input:
   - CUID = CUID
   - ContractStatus = Active ('A'), Paid-off ('L')
Returned Contract(s) are used within the next steps.
	
- System takes each RefinancedContract.ContractNumber from the input and checks, if the corresponding contract is among the eligible Contract(s) retrieved in previous step (i.e. Contract[.Code=RefinancedContract.ContractNumber] was returned).
If such check failed for at least one of the refinanced contracts, then this whole step fails (MSG_InvalidRefinancedContracts) as well and algorithm ends.
	
- System takes the ConsolidationService and each RefinancedContract from the input and performs the basic validation of corresponding service as well as validation of individual refinanced contracts against the settings of such service as follows:

- Refinancing of internal HCI contracts must be enabled on a service level (i.e. ConsolidationService.Internal_Refinancing = TRUE). If not, then validation failed. //External refinancing via API is currently not supported.
- Only refinancing of CEL contracts is allowed. If the contract is of other type than CEL (i.e. Contract[RefinancedContract].Contract_Type <> 'CEL'), then validation failed. //Refinancing of REL, SAI etc. contracts is currently not supported.
- When there is any CEL contract with POS initial transaction among the refinanced contracts (i.e. Contract[RefinancedContract].Contract_Type='CEL' and Contract->Financial_Parameters.Initial_Transaction_Type='POS'), then refinancing of such contracts must be enabled on a service level (i.e. ConsolidationService.CEL_POS = TRUE). If not, then validation failed.
- When there is any CEL contract with cash initial transaction among the refinanced contracts (i.e. Contract[RefinancedContract].Contract_Type='CEL' and Contract->Financial_Parameters.Initial_Transaction_Type='CASH'), then refinancing of such contracts must be enabled on a service level (i.e. ConsolidationService.CEL_CASH = TRUE). If not, then validation failed.

If any of the validations failed, then this whole step fails (MSG_IncompatibleConsolidationService) as well and algorithm ends.
	
- System takes the individual refinanced contracts and gets their actual consolidation amounts according to the algorithm Get consolidation amounts for internal refinanced contracts with following parameters on the input:
   - RefinancedContract [1..n] = Contract retrieved in step 1
   - ConsolidationService = ConsolidationService

If the algorithm failed, then this whole step fails with respective error message as well and algorithm ends.
Otherwise the individual returned consolidation amounts are used within the next steps.
	
- System takes each consolidation amount retrieved in previous step and compares it with corresponding RefinancedContract.RefinancedAmount from the input. If the amounts are not equal for any of the refinanced contracts, then this step fails (MSG_InvalidRefinancedAmount) and algorithm ends.
	
- System takes all consolidation amounts retrieved in step 4 and sums them up in order to calculate the total consolidation amount.
	
- System performs the validation of total consolidation amount according to the Consolidation amount validation rule with following parameters on the input:
   - Consolidation amount = total consolidation amount calculated in previous step
   - Consolidation service = ConsolidationService
If any of the validations failed, then this whole step fails with respective error message as well and algorithm ends.
	
- System performs the validation of disbursement amount according to the Disbursement amount validation rule with following parameters on the input:
   - Consolidation amount = total consolidation amount calculated in step 6
   - Credit amount = net credit amount from the selected offer (i.e. Offer_Financial_Parameters[.Code=CustomerOfferCode].Net_Credit_Amount)
   - Consolidation service = ConsolidationService
If any of the validations failed, then this whole step fails with respective error message as well and algorithm ends.
	
- If none of the previous steps failed, then all validations were successfully passed. Algorithm ends.

## 🔗 Connections (6)

- → Dependency: [[Consolidation amount validation rule]]
- → Dependency: [[Get consolidation amounts for internal refinanced contracts]]
- → Dependency: [[Disbursement amount validation rule]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Validations
