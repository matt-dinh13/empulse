---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1872745
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 {DEL}SIR - Create Loan Service in BSL.LoanService

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This rule describes how to create a Loan Service for the Transaction Supplement

Input:

	
- contractNumber
	
- serviceExternalId
	
- transactionSupplementId


Output:

	
- loanServiceId


 

	
- System calls POST../bsl/openapi/vx/contractservices/ with parameters:
contractNumber = contractNumber
serviceExternalId = serviceExternalId
transactionSupplementId = transactionSupplementId
switchOn = "false" -- insurance activation after the Transaction Supplement is successfully accepted
	
- If Http 201 (Created) is returned, system passes the returned into loanServiceId output, otherwise the respective error is returned

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.020 Process request for a loan]]
