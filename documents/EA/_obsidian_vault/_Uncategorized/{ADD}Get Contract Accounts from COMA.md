---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1872747
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Get Contract Accounts from COMA

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This rule describes how to get Contract info by its contract code from the COMA_NG component.
Input:

	
- contractCode



	
- System calls GET method https://coma.<environment>/rest/v1/contracts/{contractCode}/accounts
	
- System returns the ContractAccounts in the response. 
If COMA component is unavailable (timeout), system returns error message of MSG_COMA_NOT_AVAILABLE; e.g. COMA system is not available.
