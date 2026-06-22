---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872741
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Create Contract in COMA

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to create Contract object via the COMA API method.
Input:

	
- customer
	
- documents[] (optional)
	
- extendedProperties[] (optional)


Output:

	
- Contract



	
- System calls POST https://coma.<environment>/rest/v1/contracts/ with the input parameters
	
- System returns the Contract, or an error if the creation fails

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.020 Process request for a loan]]

## 📊 Appears In (2 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
