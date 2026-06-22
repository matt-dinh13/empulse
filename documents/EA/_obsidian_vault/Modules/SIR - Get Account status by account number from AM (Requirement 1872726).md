---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872726
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Account status by account number from AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Account info by its account number and related customer id from the AM
Input:

	
- accountNumber
	
- customerId



	
- System call cabus-am GET .../account/{accountNumber} and header.x-cuid = customerId
	
- System returns Account object, otherwise if AM component is unavailable (timeout), system returns error message of MSG_AM_NOT_AVAILABLE; e.g. AM system is not available.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.010 Request for a loan service]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Update process-loan API method - use cases
- Use Case: Transaction origination - Use Case Model
