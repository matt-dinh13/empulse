---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1872730
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {DEL}SIR - Get Supplement definition from BSL Supplements

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

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
