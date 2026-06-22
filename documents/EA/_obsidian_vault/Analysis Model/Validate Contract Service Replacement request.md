---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Use Case Model"
domain: "Analysis Model"
element_id: 1878834
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Validate Contract Service Replacement request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Contract Service Support/Use Case Model

## 📝 Notes

{ADD CSI-4317}{Country VN}
Rule for contract and service validation for Contract Service Replacement request.

Input:
- applicationCode
- salesQuoteCode

Output:
- validation result

Steps:

	
- System checks if applicationCode value is unique in Contract Supplement by Contract Supplement.Code. If supplement code already exists,  validation fails with result "application code duplicity".
	
- System gets ApplicationData (AD) object by rule Get application data by code with applicationCode as parameter. If no data is returned,  validation fails with result "invalid application code".
	
- For relatedSubject.type = ACCOUNT check if the client has the provided Contract with contract status in ('N', 'A', 'L') and Contract Type = 'REL' and Contract Account = relatedSubject.value. If no contract is found, validation fails with result "wrong contract".
	
- System checks status of the account  by calling CABUS AM GET API /account/{accountNumber = relatedSubject.value}. If account is not found or if Account.status is NOT in (AC, PO), validation fails with result "wrong account".
	
- System checks if unprocessed requests for the Contract status change exists by Contract Status Transition Request Check. If request for status change exists,  validation fails with result "unprocessed request for contract status change exists".
	
- System gets SalesQuote data (SQD) in SQS component based on Get Offer by offerId from SQS with salesQuoteCode as parameter. If no sales quote is found, validation fails with result "sales quote not found".
	
- System checks sales quote validity (SQD.validTo). If sales quote is not valid, validation fails with result "sales quote is not valid".
	
- System gets new service by calling REST API /openapi/v1/services/{codeversions}:
- if NewServiceVersion is defined then codeversions = NewServiceCode:NewServiceVersion
- if NewServiceVersion is not defined then codeversions = NewServiceCode and system stores versionNumber value from the response as NewServiceVersion
If service is not found or versionStatus value from the response is not TERMINATED or ACTIVE, validation fails with result "new service not found".
	
- System gets old service on the contract by callin REST API /openapi/v1/services/{codeversions}:
- codeversions = OriginalServiceCode:OriginalServiceVersion. If no service is found or versionStatus value from the response is not TERMINATED or ACTIVE, validation fails with result "original service not found".
	
- System checks that ServiceType (typeCode values from the responses) related to the old and new service are the same. If not, validation fails with result "service type mismatch".
	
- System finds original service assigned on the contract (contract -> contract_service -> service where contract_service.status = ACTIVE) and save contract_service.external_ID as contract service external ID. If no record is found, validation fails with result "service not assigned".
	
- System checks if no unprocessed Contract supplement exists:
- Search for Contract Supplement having Supplement.Supplement Type = 'CONTRACT_SERVICE_REPLACE'  (Discriminator = CSREP) and Status in (IN_PROCESS)
- If a Contract Supplement is found, system performs next step based on the value from Supplement -> Supplement Process Setting.Duplicity Check Action where Status Type = ContractSupplement.Status found:
        - Case REFUSE_NEW, validation fails with result "unprocessed request exists".
        - Case 'CANCEL_CURRENT' -  the found Contract Supplement is cancelled by Change status of Contract Supplement rule with the found Contract Supplement, newStatus = 'CANCELLED', reason = 'SERVICE_REPLACE_REQ_DUPLICITY' and system continues with the processing the new Contract Supplement.
        - Case NULL (i.e. no setting for the status is found),it is continued with next step.
	
- Return OK.

## 🔗 Connections (3)

- → Dependency: [[Get Offer by offerId from SQS]]
- → Dependency: [[Get application data by code]]
- ← Dependency: [[{ADD}13.600 Process contract service replacement request]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract service replacement request processing
