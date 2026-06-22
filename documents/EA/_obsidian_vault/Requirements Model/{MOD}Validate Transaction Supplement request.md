---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data"
domain: "Requirements Model"
element_id: 1878829
diagrams: 3
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Validate Transaction Supplement request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data

## 📝 Notes

This rule presents a list of validations for a Transaction Supplement request received from an external system.
What all must be validated: Contract code, CUID, Applicant Id in CIF (if any), reference to chosen variant stored in Sales Quote Storage (SQS), Bank account data

List of validations in format [validation definition; behaviour (error message returned) if the validation fails]: 

	
- applicationCode - check the value is unique in Contract Supplement by Contract Supplement.Code; a message is written (APPLICATION_CODE_DUPLICITY; The application code is already used for a Contract Supplement.)
	
- get ApplicationData (AD) object by Get ALOP application data by code check with applicationCode as parameter. If no data is returned a message is written (INVALID_APPLICATION_CODE e.g. Invalid application code value.)
	
- relatedSubject.type - if type = ACCOUNT check if the client has the provided Contract with contract status in (N, A) and Contract Type = 'REL' and Contract Account = relatedSubject.value; a message is written (INVALID_CONTRACT; e.g. Contract with code: ${contract_code} is not valid for the request.)
	
- AD.data.parties.code [where role = CLIENT] (customerId) - check if a client with provided CUID and related to Contract.Contract Code = contract_code exists; a message is written (CLIENT_NOT_FOUND; e.g. Client with cuid: ${cuid} not found)
	
- Unprocessed requests for the Contract status change - check if no unprocessed request for Contract status change request exists by Contract Status Transition Request Check; (CONTRACT_STATUS_CHANGE_REQUIRED; e.g. An unprocessed request for contract status change exists.)
	
- If AD.data.salesQuotes[] > 1 or transactionType is NULL then checking ends -- SIR variant of processing; more than one sales quote can be returned
	
- If AD.data.salesQuotes[] = 1 and transactionType is not NULL, it is continued with next steps -- BNPL steps only
	
- if ApplicationData is returned, check if data.paymentChannel.code is not null and exists in PaymentChannel storage by calling Get PaymentChannel data by paymentChannelId with paymentChannels.code as parameter; a message is written (PAYMENT_CHANNEL_MISSING e.g. Disbursement payment channel reference is missing.)
	
- check salesQuotes.code (chosenOfferId) - check if an offer record exists for the chosenOfferId {ADD CSI-3705} and get SalesQuote data (SQD) {/ADD} in SQS component based on Get Offer by offerId from SQS; a message is written (OFFER_NOT_FOUND; e.g. Sales quote offer with id: ${chosenOfferId} not found)
	
- check Supplement definition - gets active Transaction Supplement definition by provided type in SalesQuote.purpose (i.e. get Supplement having Type = TRANSACTION_SUPPLEMENT and Transaction Type = SalesQuote.purpose and Version Status = Active);  a message is written (TRANS_DEFINITION_MISSING, e.g. Transaction supplement definition is missing.)
	
- Transaction Supplement duplicity - check if an unprocessed request for Transaction Supplement request exists (search for Contract Supplement having Supplement.Supplement Type = 'TRANSACTION'  (Discriminator = TRANSCS) and Status in (DRAFT, IN_PROCESS, APPROVED, SIGNED)  {ADD PROB-23} and there is no related transaction (Sales Quote Applied -> Account Transactions) in status 'SENT_TO_CONFIRMATION'  {/ADD})
If a Transaction Supplement is found, system performs next step based on the value from Supplement ->Supplement Process Setting.Duplicity Check Action where Status Type = The_Transaction Supplement.Status found
- Case 'CANCEL_CURRENT' -  the found Contract Supplement is cancelled by Change status of Contract Supplement rule with the found Contract Supplement, newStatus = 'CANCELLED', reason = 'TRANSACTION_REQ_DUPLICITY' 
--- System generates ALOPRequestCanceledSE with the cancelled Contract Supplement as parameter
--- System continues with the processing the new Contract Supplement
- Case 'REFUSE_NEW'; a message is written (TRANSACTION_REQ_DUPLICITY; e.g An unprocessed request for transaction supplement exists on contract ${contractCode})
- Case NULL (i.e. no setting for the status is found); it is continued with next step

End

## 🔗 Connections (5)

- → Dependency: [[Contract Status Transition Request Check]]
- → Dependency: [[Get application data by code]]
- → Dependency: [[Get PaymentChannel data by paymentChannelId]]
- → Dependency: [[Get Offer by offerId from SQS]]
- ← Dependency: [[{MOD}13.100 Create Transaction Supplement service]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement request creation - Use case model
