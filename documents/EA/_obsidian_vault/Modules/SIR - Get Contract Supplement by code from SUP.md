---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872722
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Contract Supplement by code from SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Contract Supplement based on its ID from SUP component.

Input:

	
- contractSupplementId



	
- System calls GET method of https://sup.<environment>/rest/v1/contract-supplements/{contractSupplementId}
	
- System returns the ContractSupplement in the response. 
If SUP component is unavailable (timeout), system returns error message of MSG_SUP_NOT_AVAILABLE; e.g. SUP system is not available.

## 🔗 Connections (1)

- ← Usage: [[{MOD}16.010 Request for a loan service]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Update process-loan API method - use cases
- Use Case: Transaction origination - Use Case Model
