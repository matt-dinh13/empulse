---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850571
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Account status by account number from AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Account info by its account number and related customer id from the AM
Input:

	
- accountNumber
	
- customerId



	
- System call cabus-am GET .../account/{accountNumber} and header.x-cuid = customerId
	
- System returns Account object, otherwise if AM component is unavailable (timeout), system returns error message of MSG_AM_NOT_AVAILABLE; e.g. AM system is not available.

## 🔗 Connections (1)

- ← Dependency: [[16.010 Request for a loan transaction service]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
