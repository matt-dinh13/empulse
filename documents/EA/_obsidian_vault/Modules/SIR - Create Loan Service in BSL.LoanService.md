---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850560
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Create Loan Service in BSL.LoanService

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

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

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
