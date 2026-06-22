---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9342 - Validate direct debit mandates via DDM REST API"
domain: "Requirements Model"
element_id: 1821070
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Validate application DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9342 - Validate direct debit mandates via DDM REST API

## 📝 Notes

This object describes the steps, how system validates the data of selected direct debit mandate for their correctness and completeness.

Input:
- DirectDebitMandateCode = unique identifier of the direct debit mandate

Output:
- ValidationResult = result of respective direct debit mandate validation (positive / negative)
- ErrorCode [0..n] = code of the respective error, that caused the direct debit mandate validation to fail

Steps:

	
- System takes the DirectDebitMandateCode from the input and validates the data of the corresponding direct debit mandate by calling the respective REST API provided by the Payments module (i.e. POST ValidateDDM) with following input parameters:
   - ddmCode = DirectDebitMandateCode
 - validateBankAccountAttributes = if enableDDMSourceAndType is true, then value is false (and vice versa)
If calling the service fails due to any reason, then the whole validation fails as well - i.e. algorithm ends with a negative ValidationResult and the respective ErrorCode ('MSG_ModuleCommunicationFailure') returned on the output.
	
- System receives the ValidateDDMResponse and proceeds based on the value of the .resultCode returned within such response as follows: //Applicable when returned along with the regular HTTP response for a successful operation (i.e. response with .code = '200' (OK)).
   a) In case the returned .resultCode is in ('SUCCESS', 'DDM_ALREADY_CANCELED', 'DDM_ALREADY_FINISHED'), then the direct debit mandate was successfully validated (positive ValidationResult).
   b) Otherwise the direct debit mandate validation failed (negative ValidationResult) and respective ErrorCode (value of each returned .resultCode) is returned on the output.
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: LOR-9582 DDM validation when signing agreement
- Custom: Operations with application DDM
