---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850573
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Supplement definition from BSL Supplements

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Supplement definitions needed for the loan (transaction) request processing

Input:

	
- processType


Output:

	
- SupplementDefinition



	
- System calls  GET ..bsl/api/vx/supplements with parameters:
- supplementType = TRANSACTIONS
- processType = processType
	
- If the call returns Http 200, system returns the result to the SupplementDefinition, otherwise UNKNOWN_LOAN_PROCESS_TYPE error is returned

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
