---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850572
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Activate Insurance Service on Contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to activeta an insurance service on a contract

Input:

	
- insuranceContractCode
	
- reasonNotice
	
- insurancePremium
	
- sumInsured
	
- signDate
	
- term


Output:

	
- InsuranceContract



	
- System calls POST ../bsl/api/vx/insurance-contract/activate with parameters:
- insuranceContractCode
- reasonNotice
- loanTransactionParameters {
    insurancePremium,
    sumInsured,
    signDate,
    term }
	
- If Http 200 (OK), system returns the InsuranceContract, otherwise respective error is returned

## 🔗 Connections (1)

- ← Dependency: [[16.030 Process Transaction Supplement notification]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
