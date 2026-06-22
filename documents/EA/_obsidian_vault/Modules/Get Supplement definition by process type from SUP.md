---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872732
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Get Supplement definition by process type from SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Supplement definitions from SUP component based on supplement and process type. The definition needed for the loan (transaction) request processing.

Input:

	
- supplementType
	
- processType


Output:

	
- SupplementDefinition



	
- System calls  GET https://sup.<environment>/rest/v1/supplements?supplementType={supplementType}&processType={processType}&activeOnly=true
	
- If the call returns Http 200, system returns the result to the SupplementDefinition, otherwise UNKNOWN_LOAN_PROCESS_TYPE error is returned

## 🔗 Connections (2)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
- ← Dependency: [[{MOD}16.020 Process request for a loan]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
