---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878827
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get Bank branch by synchro code from Payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CLM-3207 /}
This rule describes how to get bank branch and bank data from the Payment module based on provided Bank branch synchro code
 

	
- System calls BankManagementWS.GetBankBranchData with parameter: synchronizationCode = recipientBankAccount.bankBranchSyncCode
	
- System returns the result. If the called WS is unavailable (timeout), system returns error message of MSG_BANK_MANAGEMENT_NOT_AVAILABLE; e.g. Bank management is not available.
