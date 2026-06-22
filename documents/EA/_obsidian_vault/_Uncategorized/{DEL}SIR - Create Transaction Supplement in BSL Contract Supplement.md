---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1872738
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {DEL}SIR - Create Transaction Supplement in BSL Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

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
