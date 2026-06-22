---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872735
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Contract by code from COMA

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Contract info by its contract code from the COMA_NG component.
Input:

	
- contractCode



	
- System calls GET method https://coma.<environment>/rest/v12/contracts/{contractCode}
	
- System returns the Contract in the response. 
If COMA component is unavailable (timeout), system returns error message of MSG_COMA_NOT_AVAILABLE; e.g. COMA system is not available.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.010 Request for a loan service]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Update process-loan API method - use cases
- Use Case: Transaction origination - Use Case Model
