---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module"
domain: "Requirements Model"
element_id: 1836944
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Map REM API Register result codes to GUI codes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module

## 📝 Notes

BSL translates the result codes according to the following mapping:

	
- CONTRACT_NOT_FOUND -> CONTRACT_NOT_FOUND
	
- COMMODITY_VALIDATION_ERROR -> MSG_ValidationUnsuccessful
	
- CONTRACT_REGISTRATION_WRONG_STATUS -> MSG_RegisterCONTRACT_ContractRegistrationWrongStatus
	
- MISTAKE_TICKET_EXIST -> MSG_RegisterContract_DocumentsHasMistakeTickets
	
- DOCUMENT_WAS_NOT_CHECKED -> MSG_RegisterContract_DocumentsNotChecked
	
- CONTRACT_WRONG_STATUS -> MSG_WRONG_CONTRACT_STATUS
	
- DOCUMENT_INVALID_INCOME_PROOF_ATTRIBUTE -> MSG_IncomeProofDocumentAttributeNotFilled
	
- DOCUMENT_PROOF_CHECK_NOT_PERFORMED -> MSG_ProofcheckFailedForDocument
	
- REUSED_DDM -> REUSED_DDM ('DDM is reused. Please record an error.')
	
- BLACKLISTED_DDM -> BLACKLISTED_DDM ('The DDM is on Blacklist. Please record an error.')
	
- all other errors -> MSG_RegisterContract_ContractRegistrationUnknownError

## 🔗 Connections (1)

- ← Dependency: [[01.270 Register contract manually]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-17316 (CLM-5164) Registration based on REM module
- Use Case: Contract registration
