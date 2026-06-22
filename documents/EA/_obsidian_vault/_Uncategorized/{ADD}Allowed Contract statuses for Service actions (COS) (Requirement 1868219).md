---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1868219
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Allowed Contract statuses for Service actions (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CSI-2970 /}
This rule determines allowed statuses of the loan Contract for which some action with Loan Service can be done
Input:

	
- LoanContractCode


Output:

	
- Result (boolean)


Check: If Contract by Contract Code = LoanContractCode is in Status (ListOfAllowedLoanStatuses) then return TRUE, else return FALSE

ListOfAllowedLoanStatuses (system property) is set by "'N', 'A'" by default (Signed, Active)
