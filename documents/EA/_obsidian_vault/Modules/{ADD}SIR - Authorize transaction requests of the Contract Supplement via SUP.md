---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872737
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}SIR - Authorize transaction requests of the Contract Supplement via SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

{ADD /}
This rule describes authorization of prepared transaction(s) related to the Contract Supplement

Input:

	
- contractSupplementId


Output:

	
- response



	
- System calls PUT https://sup.<environment>/rest/v1/contract-supplements/{contractSupplementId}/authorize
	
- System returns the call response in response

## 🔗 Connections (2)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
- ← Dependency: [[16.025 Process Transaction approval result (UseCase 1872760)]]

## 📊 Appears In (1 diagrams)

- Use Case: Transaction origination - Use Case Model
