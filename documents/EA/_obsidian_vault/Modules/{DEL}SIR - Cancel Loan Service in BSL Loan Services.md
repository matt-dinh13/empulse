---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872748
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}SIR - Cancel Loan Service in BSL Loan Services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to cancel a loan service related on contract

Input:

	
- loanServiceId
	
- reasonCode



	
- System call POST .../bsl/api/v3/contractservices/{loanServiceId}/cancel, reasonCode = reasonCode
	
- If Http response <> 200 (OK), system returns respective error

## 🔗 Connections (1)

- ← Dependency: [[16.030 Process Transaction Supplement notification (UseCase 1872763)]]

## 📊 Appears In (1 diagrams)

- Use Case: Transaction origination - Use Case Model
