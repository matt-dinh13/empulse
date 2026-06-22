---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1731360
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 GetDocumentListRequest validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

There is described set of validations for GetDocumentListRequest data in this rule.

Format of validation: Rule definition; returned GetDocumentListFault if validation fails

	
- At least cuid or contractCode has to be provided; CLIENT_OR_CONTRACT_NOT_PROVIDED
	
- If contractCode is provided, it has to exists in the Contract entity; CONTRACT_NOT_FOUND
	
- If cuid  is provided, it has to exists in the Client entity; CLIENT_NOT_FOUND
	
- If both cuid and contractCode are provided, it has to exist relation between them (i.e. Contract - > Deal -> Client Snapshot -> Client; INVALID_DATA
