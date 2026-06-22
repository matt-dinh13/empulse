---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870128
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Validate Contract Supplement request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

This rule presents a list of validations for a ContractSupplement creation request received from an external system.

List of validations in format [validation definition; behaviour (error message returned) if the validation fails]: 

	
- typeSpecificData.applicationCode - check the value is unique in Contract Supplement by Contract Supplement.Code; a message is written (APPLICATION_CODE_DUPLICITY; The application code is already used for a Contract Supplement.)
	
- get ApplicationData (AD) object by Get Application data by code from ADS (SUP) with applicationCode as parameter. If no data is returned a message is written (INVALID_APPLICATION_CODE e.g. Invalid application code value.)
	
- get Contract data by {ADD}Get Contract by code from COMA with contractCode as parameter.
If no Contract is returned, or returned Contract status = CANCELLED || WRITTEN-OFF ; a message is written (INVALID_CONTRACT; e.g. Contract with code: ${contract_code} is not valid for the request.)
	
- AD.data.parties.code [where role = CLIENT] (customerId) - check if customerId = Contract.customer.id; a message is written (CLIENT_NOT_FOUND; e.g. Client with cuid: ${cuid} not found)
	
- supplementId - gets active Supplement definition by provided supplementId;  a message is written (SUPPLEMENT_DEFINITION_IS_MISSING, e.g. Supplement definition is missing.)
	
- Contract Supplement duplicity - check if an unprocessed request for Contract Supplement exists (search for Contract Supplement having Supplement.Supplement Type = Supplement.Type and Status in ( IN_PROCESS, APPROVED, SIGNED)
If a Contract Supplement is found, system performs next step based on the value from Supplement ->Supplement Process Setting.Duplicity Check Action where Status Type = The_Contract Supplement.Status found
- Case 'CANCEL_CURRENT' -  the found Contract Supplement is cancelled by Change status of Contract Supplement rule with the found Contract Supplement, newStatus = 'CANCELLED', reason = 'CONTRACT_SUPPLEMENT_REQ_DUPLICITY' 
--- System continues with the processing the new Contract Supplement
- Case 'REFUSE_NEW'; a message is written (CONTRACT_SUPPLEMENT_REQ_DUPLICITY'; e.g An unprocessed request for transaction supplement exists on contract ${contractCode})
- Case NULL (i.e. no setting for the status is found); it is continued with next step

Return to the calling use case

## 🔗 Connections (3)

- → Dependency: [[Get Application data by code from ADS (SUP)]]
- → Dependency: [[Get Contract by code from COMA]]
- ← Dependency: [[13.010 Create Contract Supplement]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Create Contract Service Supplement - Use Case Model
