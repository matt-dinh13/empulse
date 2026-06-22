---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Business Rules"
domain: "Modules"
element_id: 1868469
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Define set of attributes for response

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Business Rules

## 📝 Notes

Input:
SearchContractsRequest.projections

Output:
Response with set of attributes, which will be populated

Steps:

	
- For each projection system does following steps:
- If projection has suffix DEFAULT ({prefix}_{suffix} e.g. FINANCIAL_PARAMETERS_DEFAULT where FINANCIAL_PARAMETERS is prefix and DEFAULT is suffix) then system adds to response set of all attributes from object SearchContractsResponse related with projection, which has same prefix and suffix DEFAULT
- If projection has suffix EXTENDED then system adds to response set of all attributes from object SearchContractsResponse related with projection, which has same prefix and suffix DEFAULT or EXTENDED
- If projection has suffix FULL then system adds to response set of all attributes from object SearchContractsResponse related with projection, which has same prefix and suffix DEFAULT or EXTENDED or FULL
	
- System returns response with added attributes.

## 🔗 Connections (2)

- ← Dependency: [[Get contract]]
- ← Usage: [[{MOD}Contracts search]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Logical: getContract
