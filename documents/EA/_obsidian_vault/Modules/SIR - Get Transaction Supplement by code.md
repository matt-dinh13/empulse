---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850563
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Transaction Supplement by code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Transaction Supplement based on its ID from BSL Transaction Supplement

Input:

	
- transactionSupplementId



	
- System calls GET method of .../transaction-supplement/{transactionSupplementId}
	
- System returns the TransactionSupplement in the response. 
If BSL component is unavailable (timeout), system returns error message of MSG_BSL_NOT_AVAILABLE; e.g. BSL system is not available.

## 🔗 Connections (2)

- ← Dependency: [[16.020 Process request for a loan]]
- ← Dependency: [[16.010 Request for a loan transaction service]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
