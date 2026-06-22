---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Business Rules"
domain: "Modules"
element_id: 1868468
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Validate contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Business Rules

## 📝 Notes

Input: Contract code(s)

Steps:

	
- For each contract, system does the following steps:
If GetContractRequest.ContractCode = Null then system returns error code 400 and error message "Use more specific filter to search". Use case ends.
	
- If GetContractRequest.contractStatus is not in (null, A, T, K, L, N, H, Q) then system returns error code 400 and error message "Failed to convert property value*". Use case ends.
	
- If relation between GetContractRequest.ContractCode and Financial parameters.Contract id doesn't exist, then system returns error code 400 and error message "Failed to convert property value*". Use case ends.
	
- If transient relation between GetContractRequest.ContractCode and Client via Deal doesn't exist, then system returns error code 400 and error message "Failed to convert property value*". Use case ends.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
