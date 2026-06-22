---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model"
domain: "Analysis Model"
element_id: 1877214
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Validate Credit limit change request from messaging

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/UseCase model

## 📝 Notes

This rule defines a list of validations performed on the credit limit change sent via a messaging

Input:

	
- CL change Type
	
- data (data of the Credit limit change request)


List of validations in format [validation definition; behaviour if the validation fails]:

Common (for both - standard CLIP/CLDP as well as for RCLDP)

	
- customerId - check if a client with provided CUID exists; a message is written (CLIENT_NOT_FOUND; e.g. Client with cuid: ${cuid} not found)
	
- contractCode - check if the client has the provided Contract with contract status in ( Allowed contract statuses for CLIP/CLDP rule for CL change Type from input) and Contract Type = 'REL' and Contract Account is not NULL; a message is written (INVALID_CONTRACT; e.g. Contract with code: ${contract_code} is not valid for the request.)


	
- {DEL CSI-4211}
check if no unprocessed request for Credit Limit Change exists (search for Contract Supplement having Type = CREDIT_LIMIT_CHANGE and Status in (DRAFT, IN_PROCESS, APPROVED); a message is written (MSG_CreditLimitRequestDuplicity; e.g An unprocessed request for credit limit change exist on contract ${contract_code})
{/DEL}


	
- check if no unprocessed request for contract status change of the processed Contract exists by Contract Status Transition Request Check; (CONTRACT_STATUS_CHANGE_REQUIRED; e.g. An unprocessed request for contract status change exists.)


	
- process all checks for requestedCreditLimitAmount defined below
	
- {ADD CSI-4211}
If all previous checks are ok and new request is valid, then do CreditLimitChange Supplement duplicity, else rule ends.
	
- CreditLimitChange Supplement duplicity - check if an unprocessed request for CreditLimitChange Supplement request exists = search for Contract Supplement having Supplement.Supplement Type = CREDIT_LIMIT_CHANGE (Discriminator = CLCS) and Status in (DRAFT, IN_PROCESS, APPROVED, SIGNED) 
If a CreditLimitChange Supplement is found, system performs next step based on the value from Supplement ->Supplement Process Setting.Duplicity Check Action where Status Type = found Supplement.Status
  - Case 'CANCEL_CURRENT' 
    --  the found Contract Supplement is canceled by Change status of Contract Supplement rule with the found Contract Supplement, newStatus = 'CANCELLED', reason = 'CLIP_REQ_DUPLICITY' 
    -- System generates CreditLimitChangeRequestCanceledSE with the canceled Contract Supplement as parameter and system generates Kafka notification for canceled Contract Supplement
   -- System continues with the processing the new Contract Supplement
  - Case 'REFUSE_NEW'; a message is written (MSG_CreditLimitRequestDuplicity; e.g An unprocessed request for credit limit change exist on contract ${contract_code}) (new contract supplement is not created)
- Case NULL (i.e. no setting for the status is found); it is continued with next step
{/ADD}



For CLIP/CLDP

	
- requestedCreditLimitAmount:
- Value is positive integer or zero; a message is written (MSG_CreditLimitValuePositiveInteger; "Credit limit value has to be positive integer or zero.")
- Currency matches Contract.Financial Parameters.Provided Credit Limit.Currency; a message is written (MSG_CurrencyNotMatch; "The currency in request doesn't match the account currency.") 
- get CurrentCreditLimit from Contract.Financial Parameters.Provided Credit Limit [Archived = 0] of the processed Contract
- for CL change type = CLIP check if CurrentCreditLimit < requestedCreditLimitAmount; a message is written (MSG_RequiredCLAmountHasToBeHigherThenCurrent; e.g. "Required credit limit has to be higher than current credit limit, which is equal to ${OriginalCreditLimit}")
- for CL change type = CLDP check if CurrentCreditLimit > requestedCreditLimitAmount; a message is written (MSG_RequiredCLAmountHasToBeLowerThenCurrent; e.g. Required credit limit has to be lower then current credit limit, which is equal to ${providedCreditLimit}.)


For RCLDP

	
- get the last ACCEPTED Credit Limit Change Contract Supplement related to the Contract and checks if it is type of CLDP  (MSG_RollbackCreditLimitChangeIsNotTheLast; e.g. "Found contract supplement is not the last approved credit limit change request for the contract.")
	
- get CurrentCreditLimit = Original Credit Limit from the found Credit Limit Change Contract Supplement.
	
- requestedCreditLimitAmount:
- check if currency matches Contract.Financial Parameters.Credit Limit Amount.Currency; a message is written (MSG_CurrencyNotMatch; "The currency in request doesn't match the account currency.")
- check if requestedCreditLimitAmount match the amount of the found Credit Limit Change Contract Supplement.Requested Credit Limit; a message is written (MSG_RollbackCreditLimitChangeRequiredCreditLimitNotMatch; "The provided requested credit limit does not match the requested credit limit of contract supplement.").

## 🔗 Connections (2)

- → Dependency: [[Allowed contract statuses for CLIP_CLDP]]
- ← Dependency: [[13.070 Process Credit limit change request via messaging (UseCase 1877206)]]

## 📊 Appears In (1 diagrams)

- Use Case: Credit Limit Change via messaging - Use Case model
