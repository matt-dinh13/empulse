---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module"
domain: "Requirements Model"
element_id: 1836943
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Map REM API Register result codes to SOAP codes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module

## 📝 Notes

BSL translates the result codes according to the following mapping:
 

	
- CONTRACT_NOT_FOUND -> CONTRACT_NOT_FOUND_REGISTRATION_FAILED;
	
- COMMODITY_VALIDATION_ERROR -> CONTRACT_NOT_REGISTERED_COMMODITY_VALIDATION_FAILED;
	
- CONTRACT_REGISTRATION_WRONG_STATUS -> CONTRACT_ALREADY_REGISTERED;
	
- MISTAKE_TICKET_EXIST -> DOC_MISTAKES_MUST_BE_CLOSED_CANCELLED_PRECONDITION_FAILED;
	
- DOCUMENT_WAS_NOT_CHECKED -> ALL_DOCS_MUST_BE_CHECKED_PRECONDITION_FAILED;
	
- COMMUNICATION_ERROR, USER_DOESNT_EXISTS, UNKNOWN_ERROR -> SYSTEM_ERROR;
	
- CONTRACT_WRONG_STATUS, COMMODITY_NOT_FOUND -> INVALID_DATA;
	
- DOCUMENT_INVALID_INCOME_PROOF_ATTRIBUTE -> DOC_INCOME_PROOF_ATTRIBUTE_NOT_FILLED;
	
- DOCUMENT_PROOF_CHECK_NOT_PERFORMED -> CONTRACT_NOT_REGISTERED_PROOF_CHECK_VALIDATION_FAILED;
	
- REUSED_DDM -> REUSED_DDM ('DDM is reused. Please record an error.')
	
- BLACKLISTED_DDM -> BLACKLISTED_DDM ('The DDM is on Blacklist. Please record an error.')
	
- any other error -> INVALID_DATA

## 🔗 Connections (1)

- ← Dependency: [[01.271 Register contract remotely]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-17316 (CLM-5164) Registration based on REM module
- Use Case: Contract registration
