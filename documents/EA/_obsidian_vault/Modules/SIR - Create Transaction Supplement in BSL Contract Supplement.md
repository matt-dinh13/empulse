---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850565
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Create Transaction Supplement in BSL Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes calling the BSL Contract Supplement to create a Transaction Supplement
Input:

	
- SupplementDefinition
	
- LoanProcessingRequest


Output:

	
- transactionSupplementId


Steps:

	
- System calls POST ../bsl/api/vx/transaction-supplement with the request parameters:
- applicationCode = LoanProcessingRequest.applicationCode
- relatedSubjects = LoanProcessingRequest.relatedSubjects
- sourceSystem = LoanProcessingRequest.sourceSystem 
- supplementDefinitionId = SupplementDefinition.uuid
	
- If Http 201 is returned from the call, system returns Transaction Supplement id as transactionSupplementId, otherwise respective error is returned

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
