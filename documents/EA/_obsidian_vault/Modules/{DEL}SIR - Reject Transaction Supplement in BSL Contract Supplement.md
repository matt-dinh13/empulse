---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872734
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}SIR - Reject Transaction Supplement in BSL Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes rejecting of the Transaction Supplement as result of the transaction approval process

Input:

	
- transactionSupplementId
	
- reasonCode (optional)


Output:

	
- response



	
- System calls PUT ../bsl/api/vx/transaction-supplement/reject with parameters:
- transactionSupplementId
- reasonCode
	
- System returns the call response in response

## 🔗 Connections (1)

- ← Dependency: [[16.025 Process Transaction approval result (UseCase 1872760)]]

## 📊 Appears In (1 diagrams)

- Use Case: Transaction origination - Use Case Model
