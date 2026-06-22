---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850574
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Cancel Transaction Supplement in BSL Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes rejecting of the Transaction Supplement as result of the transaction approval process

Input:

	
- transactionSupplementId
	
- reasonCode


Output:

	
- response



	
- System calls PUT ../bsl/api/vx/transaction-supplement/reject with parameters:
transactionSupplementId
reasonCode
	
- System returns the call response in response

## 🔗 Connections (1)

- ← Dependency: [[16.025 Process Transaction approval result]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
