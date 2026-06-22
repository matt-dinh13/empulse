---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities"
domain: "Modules"
element_id: 1872740
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Create Contract Supplement in SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities

## 📝 Notes

This rule describes how to create Contract Supplement object in SUP component.

Input:

	
- contractCode
	
- SupplementDefinition -- reference to Supplement definition
	
- LoanProcessingRequest


Output:

	
- contractSupplementId


Steps:

	
- System calls  POST https://sup.<environment>/rest/v1/contract-supplements with the request parameters:
- typeSpecificData.applicationCode = LoanProcessingRequest.applicationCode
- contractCode = contractCode
- requestSource.sourceSystem = LoanProcessingRequest.sourceSystem 
- requestSource.sourceRequestId = LoanProcessingRequest.sourceRequestId
- supplementId = SupplementDefinition.uuid
	
- If Http 201 is returned from the call, system returns Contract Supplement Id as contractSupplementId, otherwise respective error is returned

## 🔗 Connections (2)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
- ← Dependency: [[{MOD}16.020 Process request for a loan]]

## 📊 Appears In (2 diagrams)

- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
