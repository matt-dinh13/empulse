---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850566
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 SIR - Authorize transaction requests of the Transaction Supplement in AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes authorization of prepared transaction related to the transaction supplement

Input:

	
- transactionSupplementId


Output:

	
- response



	
- System calls PUT ../bsl/api/vx/transaction-supplement/{transactionSupplementId}/authorize
	
- System returns the call response in response

## 🔗 Connections (2)

- ← Dependency: [[16.020 Process request for a loan]]
- ← Dependency: [[16.025 Process Transaction approval result]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
